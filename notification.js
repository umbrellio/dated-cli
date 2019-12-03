const axios = require("axios")

module.exports = config => {
  const logger = require("./logger")(config)
  const { webhook, channel } = config

  const send = text => {
    if (!webhook || !channel) {
      logger.log("No webhook or channel settings")
      return Promise.resolve()
    }

    logger.debug("sending message to webhook...")
    return axios
      .post(webhook, { channel, text })
      .then(response => logger.debug("message sent, response is", response.status, response.data))
  }

  return {
    send,
  }
}
