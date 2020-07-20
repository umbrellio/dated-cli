module.exports = ({ name }) => {
  const titlePrefix = "#####"

  return {
    build: packages => [
      name ? `${titlePrefix} [${name}]` : "",
      "**Following packages are outdated:**",
      ...packages.sort(),
    ].filter(x => !!x).join("\n"),
    projectName: () => name ? `${titlePrefix} [${name}]` : "",
  }
}
