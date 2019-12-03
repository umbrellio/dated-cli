#!/usr/bin/env node

const path = require("path")
const cp = require("child_process")
const axios = require("axios")
const fs = require("fs")

const config = require("./config")
const logger = require("./logger")(config)
const cache = require("./cache")(config)
const packages = require("./packages")(config)
const message = require("./message")(config)
const notification = require("./notification")(config)

const INTERVAL = config.days * 24 * 60 * 60 * 1000 // days to ms

const needSendMessage = () => {
  const previous = cache.getLastMessageTime()
  const now = (new Date()).getTime()
  const needSend = previous + INTERVAL < now
  logger.debug("last message at", previous)
  logger.debug("sending is", needSend ? "enabled" : "disabled")

  return previous + INTERVAL < now
}

const sendMessage = (...args) => new Promise((resolve, reject) => {
  if (needSendMessage()) {
    notification.send(...args)
      .then(cache.setLastMessageTime(new Date()))
      .then(resolve)
      .catch(reject)
  } else {
    resolve()
  }
})

const outdated = packages.get()

if (outdated.length > 0) {
  process.exitCode = config.allowFailure ? 0 : 1
  const text = message.build(outdated)
  logger.log(text)
  sendMessage(text)
    .then(() => {
      logger.debug("exit with code", process.exitCode)
    })
    .catch(e => {
      logger.error(e)
      process.exit(1)
    })
} else {
  logger.log("All is up to date")
}
