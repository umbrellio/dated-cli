const cp = require("child_process")

module.exports = config => {
  return {
    get: () => {
      const filterPackages = require("./filter_packages")(config)
      const serializePackages = require("./serialize_packages")(config)

      const command = cp.spawnSync("yarn", ["outdated", "--json"])
      const output = command.output[1].toString()
      if (!output) return []

      const content = output.split("\n")[1]
      const json = JSON.parse(content)
      const body = json.data.body
      const packages = filterPackages.filter(body)

      return serializePackages.serialize(packages)
    }
  }
}
