module.exports = config => {
  const logger = require("./logger")(config)
  const { webhook, channel } = config

  const send = text => {
    logger.debug("sending message to webhook...")
    return axios.post(webhook, { channel, text }).catch(e => console.error(e))
  }

  return {
    send,
  }
}
