const isPatchUpdate = (current, latest) => {
  const [currentMajor, currentMinor, currentPatch] = current.split(".")
  const [latestMajor, latestMinor, latestPatch] = latest.split(".")

  return (
    currentPatch !== latestPatch && currentMinor === latestMinor && currentMajor === latestMajor
  )
}

const isMinorUpdate = (current, latest) => {
  const [currentMajor, currentMinor] = current.split(".")
  const [latestMajor, latestMinor] = latest.split(".")

  return currentMinor !== latestMinor && currentMajor === latestMajor
}

const isMajorUpdate = (current, latest) => {
  const [currentMajor] = current.split(".")
  const [latestMajor] = latest.split(".")

  return currentMajor !== latestMajor
}

const keepVersionByTreshold = (versionThreshold, current, latest) => {
  switch (versionThreshold) {
    case "patch":
      return isPatchUpdate(current, latest)
    case "minor":
      return isMinorUpdate(current, latest)
    case "major":
      return isMajorUpdate(current, latest)
    default:
      return false
  }
}

const filterByIgnorList = (packages, config) => {
  if (!config.ignorePackages || !config.ignorePackages.length) return packages

  return packages.filter(pack => !config.ignorePackages.includes(pack[0]))
}

const filterByVersionThreshold = (packages, config) => {
  if (!config.versionThreshold) return packages

  return packages.filter(pack => !keepVersionByTreshold(config.versionThreshold, pack[1], pack[3]))
}

const filter = (packages, config) => {
  const pk = filterByIgnorList(packages, config)
  return filterByVersionThreshold(pk, config)
}

module.exports = config => {
  return {
    filter: packages => filter(packages, config)
  }
}
