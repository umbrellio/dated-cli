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
  "cacheFile": ".dated-cache"
}
```

- `name` – name of your app
- `webhook` – slack/mattermost webhook url
- `channel` – slack/mattermost channel name
- `days` – period of notifications (0 means every time)
- `debug` – turn on/off debug messages in console
- `allowFailure` – fail or not when there are outdated packages
- `cacheFile` – cache file path
