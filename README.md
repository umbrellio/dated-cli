# Dated

Yarn outdate wrapper with notification

## Configuration

Configuration file must be located in your project's root and named `.dated.json`.

Possible options:

```json
{
  "name": null,
  "webhook": null,
  "channel": null,
  "days": 7,
  "debug": false,
  "allowFailure": true,
  "versionThreshold": "",
  "ignorePackages": [],
  "importantPackages": [],
  "cacheFile": ".dated-cache"
}
```

- `name` – name of your app
- `webhook` – slack/mattermost webhook url
- `channel` – slack/mattermost channel name
- `days` – period of notifications (0 means every time)
- `debug` – turn on/off debug messages in console
- `allowFailure` – fail or not when there are outdated packages
- `versionThreshold` – check versions outdated by treshold ("major|minor|patch")
- `ignorePackages` – packages that will be ignored during check outdated
- `importantPackages` – packages that will be printed in result message
- `cacheFile` – cache file path

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/umbrellio/dated-cli.

## License

Released under MIT License.

## Authors

Created by [Aleksei Bespalov](https://github.com/nulldef).

<a href="https://github.com/umbrellio/">
<img style="float: left;" src="https://umbrellio.github.io/Umbrellio/supported_by_umbrellio.svg" alt="Supported by Umbrellio" width="439" height="72">
</a>
