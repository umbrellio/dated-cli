const pluralize = (count, noun) => `**${count}** more ${noun}${count !== 1 ? "s" : ""}`

const countOutdated = (packages, config) => {
  const count = packages.filter(pack => !config.importantPackages.includes(pack[0])).length

  if (config.importantPackages.length === 0) return `**${count} packages are outdated** :pepeaff:`

  return count > 0 ? `\nAnd ${pluralize(count, "package")}` : ""
}

const getPackagesList = packages => {
  return packages.reduce((mem, [ name, current, _wanted, latest, _type, url ]) => {
    return [...mem, [`[${name}](${url})`, "from", current, "to", latest].join(" ")]
  }, [])
}

const serialize = (packages, config) => {
  const message = require("./message")(config)

  const outdatedCount = countOutdated(packages, config)
  const importantPackages = packages.filter(pack => config.importantPackages.includes(pack[0]))
  const packagesList = getPackagesList(importantPackages)

  if (packagesList.length === 0) return `${message.projectName()}\n${outdatedCount}`

  return [message.build(packagesList), outdatedCount].filter(text => text.length > 0).join("\n")
}

module.exports = config => {
  return {
    serialize: packages => serialize(packages, config)
  }
}
