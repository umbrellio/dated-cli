const path = require("path")
const cliConfig = require("cli-config")

const userConfig = cliConfig.getConfig({
  dirname: path.resolve(),
  ancestors: true,
  merge: "deep",
})

const defaults = {
  name: null,
  webhook: null,
  channel: null,
  days: 7,
  debug: false,
  allowFailure: true,
  cacheFile: ".dated-cache"
}

module.exports = {
  ...defaults,
  ...userConfig,
}
