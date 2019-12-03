const path = require("path")
const cliConfig = require("cli-config")

const userConfig = cliConfig.getConfig({
  dirname: __dirname,
  ancestors: true,
  merge: "deep",
  configFile: ".dated.json"
})

const defaults = {
  name: null,
  webhook: null,
  channel: null,
  days: 7,
  debug: false,
  allowFailure: false,
  cacheFile: ".dated-cache"
}

module.exports = {
  ...defaults,
  ...userConfig,
}
