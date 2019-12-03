const fs = require("fs")
const path =require("path")

module.exports = ({ cacheFile }) => {
  const filepath = path.resolve(cacheFile)
  const write = data => fs.writeFileSync(filepath, JSON.stringify(data))
  const read = () => fs.existsSync(filepath) ? JSON.parse(fs.readFileSync(filepath)) : {}

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
