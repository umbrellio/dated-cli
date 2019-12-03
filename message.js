module.exports = ({ name }) => {
  return {
    build: packages => [
      name ? `[${name}]` : "",
      "Following packages are outdated:",
      ...packages.sort(),
    ].filter(x => !!x).join("\n")
  }
}
