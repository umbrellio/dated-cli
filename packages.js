const cp = require("child_process")

module.exports = () => {
  return {
    get: () => {
      const command = cp.spawnSync("yarn", ["outdated", "--json"])
      const output = command.output[1].toString()
      if (!output) return []

      const content = output.split("\n")[1]
      const json = JSON.parse(content)
      return json.data.body.reduce((mem, [ name, current, _wanted, latest, _type, url ]) => {
        return [...mem, [name, "from", current, "to", latest, `(${url})`].join(" ")]
      }, [])
    }
  }
}
