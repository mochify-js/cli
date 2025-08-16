# Migration from mochify (legacy) to @mochify/mochify v1

This guide helps migrate projects using the old `mochify` package to the new architecture composed of:

- `@mochify/cli` — the CLI wrapper (install separately)
- `@mochify/driver-*` — browser drivers (install one or more)

## Key changes

- Drivers are external packages. Install and specify a driver explicitly.
- Bring your own bundler. The new core can run your tests by concatenating files, executing a bundler command, or serving ES modules directly.
- Console forwarding, reporter wiring, and coverage collection are decoupled and streamlined.

## Install

```bash
npm rm mochify
npm i -D @mochify/cli @mochify/driver-puppeteer
```

Choose a different driver if needed, e.g. Playwright or WebDriver. See each driver README for platform specifics.

## Update npm scripts

Old:

```json
{
  "scripts": {
    "test-headless": "mochify"
  }
}
```

New (CLI with a driver):

```json
{
  "scripts": {
    "test-headless": "mochify --driver puppeteer"
  }
}
```

If you previously relied on built-in bundling, add a bundler:

```json
{
  "scripts": {
    "test": "mochify --driver puppeteer --bundle 'esbuild --bundle --format=iife' \"test/**/*.js\""
  }
}
```

Or switch to ESM without bundling:

```json
{
  "scripts": {
    "test": "mochify --driver puppeteer --esm --serve . \"test/**/*.mjs\""
  }
}
```

## Config mapping

- `--reporter`, `--ui`, `--timeout` map directly to Mocha settings and remain supported.
- `--bundle` replaces any implicit bundler from older mochify. It is a shell command; stdout must be the bundled JS.
- `--esm` cannot be used with `--bundle`.
- `--serve` starts an internal static server (used for `--esm` or to serve assets). Use `--server-option.port` to configure the port.
- `--driver` must be set (e.g. `puppeteer`). Short names resolve to `@mochify/driver-<name>`.

Place persistent config in `package.json` under `"mochify"` or a `mochify.config.*` file.

## Coverage

If your instrumentation sets `globalThis.__coverage__` in the browser, mochify forwards it to `global.__coverage__` in Node for reporters to pick up.

## Examples

See the README for programmatic usage and bundler examples.
