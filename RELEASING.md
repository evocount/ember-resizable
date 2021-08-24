## Update `CHANGELOG.md`

Following the [Keep A Changelog guide](https://keepachangelog.com/en/1.0.0/). Be sure to commit that.

## Run `release-it`

```sh
npm run release
```

Answer the questions it asks. If it doesn't publish to `npm` for some reason (wait a couple of minutes and check the [package version](https://www.npmjs.com/package/ember-resizable)) you can manually do that via:

```sh
npm publish
```

## Update the [demo](https://evocount.github.io/ember-resizable/)

```sh
npm run deploy:demo
```
