module.exports = ({ debug }) => {
  return {
    debug: (...args) => debug && console.debug("DEBUG", ...args),
    error: console.error,
    log: console.log,
  }
}
