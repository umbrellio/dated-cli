const log = (...args) => console.log(...args)

module.exports = ({ debug }) => {
  return {
    debug: (...args) => {
      if (!debug) return
      log("DEBUG", ...args, "\n")
    },
    log,
  }
}
