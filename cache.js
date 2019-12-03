const fs = require("fs")
const path = require("path")

module.exports = ({ cacheFile, ...config }) => {
  const logger = require("./logger")(config)
  const filepath = path.resolve(cacheFile)
  const write = data => {
    logger.debug("wrinting cache: ", data)
    return fs.writeFileSync(filepath, JSON.stringify(data))
  }
  const read = () => {
    logger.debug("reading cache...")
    return fs.existsSync(filepath) ? JSON.parse(fs.readFileSync(filepath)) : {}
  }

  const getLastMessageTime = () => Number(read().lastMessageTime || 0)
  const setLastMessageTime = time => {
    const date = new Date(time)
    write({ lastMessageTime: Number(date) })
  }

  return {
    getLastMessageTime,
    setLastMessageTime,
  }
}
