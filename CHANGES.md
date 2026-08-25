# Changes

## 2.0.0

- [`6c14281`](https://github.com/mochify-js/cli/commit/6c1428120b2521868666c1180f9a431751f4ea21)
  chore: update dependencies; drop @studio/tsconfig (Yashar Fakhari)
    >
    > @mochify/mochify: 1.0.1 -> 2.0.0
    > yargs: 18.0.0 -> 18.1.0
    >
    > dev:
    > @mochify/driver-jsdom(dev): 1.0.0 -> 2.0.0
    > @mochify/driver-playwright(dev): 1.0.2 -> 2.0.0
    > @mochify/driver-puppeteer(dev): 1.0.1 -> 2.0.0
    > @mochify/driver-webdriver(dev): 1.0.0 -> 2.0.0
    > @sinonjs/referee-sinon(dev): 12.0.0 -> 12.0.1
    >
    > @types/node(dev): 25.3.3 -> 26.3.0
    > c8(dev): 11.0.0 -> 12.0.0
    > execa(dev): 9.6.1 ->  10.0.1
    > lint-staged(dev): 16.3.0 -> 17.3.0
    > mocha(dev): 11.7.5 -> 12.0.0-rc.6
    > prettier(dev): 3.8.1 -> 3.9.6
    > typescript(dev) 5.9.3 -> 7.0.2
    >
    > @studio/tsconfig(dev): drop
    > @studio/tsconfig capped typescript at ^5, blocking the upgrade. Its
    > settings are now inlined in tsconfig.json (Node 22+, nodenext), with
    > tsconfig.pack.json and test/tsconfig.types-check.json extending it
    > locally.
    >
    > @types/mocha(dev): add
    >
    > BREAKING CHANGE: require Node.js >=22.13
    >
- [`cd8db22`](https://github.com/mochify-js/cli/commit/cd8db227959abdf0c18e78c094497aacaca57e41)
  chore(dev): update eslint and its config (Yashar Fakhari)
    >
    > eslint(dev): 9.39.2 -> 10.9.1
    > @studio/eslint-config(dev): 8.0.1 -> 9.0.1
    >
- [`b901567`](https://github.com/mochify-js/cli/commit/b901567d6ab87f525c093672352e05b3d25fc34c)
  chore: update github actions/checkout to v7 (Yashar Fakhari)
- [`5429218`](https://github.com/mochify-js/cli/commit/542921860b2616a8eba0b62a2b07d0fa6c52aa7e)
  ci: use NodeJs 22+; fix dependabot run issues (Yashar Fakhari)
- [`fa367d7`](https://github.com/mochify-js/cli/commit/fa367d78bcde5902e498b9e451921e816e98e4f6)
  chore(deps-dev): bump lint-staged from 16.2.7 to 16.3.0 (#38) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`902aedd`](https://github.com/mochify-js/cli/commit/902aeddae39fb2c1a7712e1e5c13d8b8d8f77f53)
  chore(deps-dev): bump rimraf from 6.1.2 to 6.1.3 (#39) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`32dc3b0`](https://github.com/mochify-js/cli/commit/32dc3b0159bd5206daf90cff13056c9df93c2316)
  chore(deps-dev): bump @types/node from 25.1.0 to 25.3.3 (#37) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`8c59363`](https://github.com/mochify-js/cli/commit/8c5936347fa797139cd33c8989d299ade2bae473)
  chore(deps-dev): bump c8 from 10.1.3 to 11.0.0 (#35) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`0ad51d4`](https://github.com/mochify-js/cli/commit/0ad51d4fddbdbd33e48e66bee42dabcc68daae0c)
  chore(deps-dev): bump @types/node from 25.0.3 to 25.1.0 (#34) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`de4b6e4`](https://github.com/mochify-js/cli/commit/de4b6e4c61a0c1bac2d1a86da6cfa5b6e177e5db)
  chore(deps-dev): bump prettier from 3.7.4 to 3.8.1 (#33) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`7863c0e`](https://github.com/mochify-js/cli/commit/7863c0e15858c75cff8653bb989dd075193a220f)
  chore(deps): bump actions/setup-node from 5 to 6 (#32) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`bb7cce4`](https://github.com/mochify-js/cli/commit/bb7cce4d48383cfa4a8bc47fe45e7d80aa52b9cd)
  chore(deps): bump actions/checkout from 5 to 6 (#31) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`f2d7e7f`](https://github.com/mochify-js/cli/commit/f2d7e7f4e2d32a1d9f7e2fd047617b6339e03f36)
  chore(deps-dev): bump eslint from 9.39.1 to 9.39.2 (#30) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`dc331c6`](https://github.com/mochify-js/cli/commit/dc331c671511c02ad1d2ffc85a4415f48df491ec)
  chore(deps-dev): bump prettier from 3.7.3 to 3.7.4 (#29) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`023c393`](https://github.com/mochify-js/cli/commit/023c3931b93d42d6b5d80607e3edc9a7f69a295f)
  chore(deps-dev): bump @types/node from 24.10.1 to 25.0.3 (#28) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`c71f651`](https://github.com/mochify-js/cli/commit/c71f651ef403639ab922cbcf5b6f08e38b202cae)
  chore(deps-dev): bump lint-staged from 16.2.6 to 16.2.7 (#24) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`c201948`](https://github.com/mochify-js/cli/commit/c201948da7d4c5ac0b29f07c7321a74740d4fd88)
  chore(deps-dev): bump rimraf from 6.1.0 to 6.1.2 (#27) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`562a0e2`](https://github.com/mochify-js/cli/commit/562a0e22395af71cc0ee6975d1d66ae2b459c064)
  chore(deps-dev): bump @types/node from 24.9.2 to 24.10.1 (#22) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`416da50`](https://github.com/mochify-js/cli/commit/416da50ab2625c7859541aa4d1abcf54ca63d832)
  chore(deps-dev): bump execa from 9.6.0 to 9.6.1 (#25) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`ab5ab18`](https://github.com/mochify-js/cli/commit/ab5ab184e8af0b72e62580e11e88c078e7f8be6b)
  chore(deps-dev): bump mocha from 11.7.4 to 11.7.5 (#26) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`a358586`](https://github.com/mochify-js/cli/commit/a358586cf33bbc0e76a7aaa92cb7e90f2a2b8d6c)
  chore(deps-dev): bump prettier from 3.6.2 to 3.7.3 (#23) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`243f91a`](https://github.com/mochify-js/cli/commit/243f91afebc6efb428fa403635fe1a339dd859b5)
  chore(deps-dev): bump @types/yargs from 17.0.34 to 17.0.35 (#21) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`539fdb3`](https://github.com/mochify-js/cli/commit/539fdb38bfd2c27ebe4f6c425efb7585bd96bd67)
  chore(deps-dev): bump eslint from 9.39.0 to 9.39.1 (#20) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`af494ed`](https://github.com/mochify-js/cli/commit/af494ed921a77158d360c00710640cf2bcc14909)
  chore(deps-dev): bump lint-staged from 16.2.3 to 16.2.6 (#19) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`9bcc506`](https://github.com/mochify-js/cli/commit/9bcc506bda60ef4ca74a68d1c0ef99a36f82e85f)
  chore(deps-dev): bump eslint from 9.36.0 to 9.39.0 (#16) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`0c07a62`](https://github.com/mochify-js/cli/commit/0c07a62629b2660a6a203e49f6b0ee569eeb781d)
  chore(deps-dev): bump @types/node from 24.6.1 to 24.9.2 (#17) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`0f9f343`](https://github.com/mochify-js/cli/commit/0f9f34341789cda2262dbdb9af56f81a1d851019)
  chore(deps-dev): bump rimraf from 6.0.1 to 6.1.0 (#18) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`70fc074`](https://github.com/mochify-js/cli/commit/70fc07488efa2235a0c20ed6ba93a0d1ea616490)
  chore(deps-dev): bump mocha from 11.7.3 to 11.7.4 (#15) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`daa0682`](https://github.com/mochify-js/cli/commit/daa0682e6dc9792c4dbaf1b00afe6b54849d877c)
  chore(deps-dev): bump @types/yargs from 17.0.33 to 17.0.34 (#14) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`2e3ba00`](https://github.com/mochify-js/cli/commit/2e3ba004ccaef31c05236d01c283b48f9ae5ce34)
  chore(deps): bump actions/setup-node from 4 to 5 (#13) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`7a78515`](https://github.com/mochify-js/cli/commit/7a78515f55946b9ed2018d66911954e41f749902)
  chore(deps-dev): bump @types/node from 24.3.0 to 24.6.1 (#8) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`66029b8`](https://github.com/mochify-js/cli/commit/66029b83077b2b273516abd4d52581652f3e8b39)
  chore(deps-dev): bump eslint from 9.34.0 to 9.36.0 (#12) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`8e3d8e5`](https://github.com/mochify-js/cli/commit/8e3d8e5fc03e4b7b26c66a859cc0b2ceb5f7c2a1)
  chore(deps-dev): bump lint-staged from 16.1.5 to 16.2.3 (#11) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`cff6653`](https://github.com/mochify-js/cli/commit/cff66530f70a6db8f2cef6d072fcacd321dd20a6)
  chore(deps-dev): bump typescript from 5.9.2 to 5.9.3 (#10) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`676fc18`](https://github.com/mochify-js/cli/commit/676fc18af96f7598d8ccf27e10a042cb55281f7e)
  chore(deps-dev): bump mocha from 11.7.1 to 11.7.3 (#9) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`11ddfad`](https://github.com/mochify-js/cli/commit/11ddfad68a2ea80a18cbf81facc7cdbdef518268)
  chore(deps-dev): bump eslint from 9.33.0 to 9.34.0 (#7) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

_Released by Yashar Fakhari on 2026-08-25._

## 1.0.0

- [`dff0030`](https://github.com/mochify-js/cli/commit/dff00304d60925a8d063cd119ff4c4ff3074bdd6)
  build: fix types in integration tests (Yashar Fakhari)
- [`f2169e7`](https://github.com/mochify-js/cli/commit/f2169e77014245559fcf9f7bd2b910421dbf449c)
  ci: add c8 code coverage and Dependabot configs (Yashar Fakhari)
- [`0ad9e46`](https://github.com/mochify-js/cli/commit/0ad9e46b59311de98555c8b24a16baa4ac479c64)
  doc: add migration.md and update readme.md (Yashar Fakhari)
- [`c7662ce`](https://github.com/mochify-js/cli/commit/c7662ce97a27fc19f08cbad244281c3b64f11b75)
  chore: update dependencies (Yashar Fakhari)
    >
    > chore: update dependencies
    >
    > - Upgrade ESLint from v8 to v9; use @studio/eslint-config v8.0.1 with new flat config file: eslint.config.js
    > - Upgrade Husky from v8 to v9
    > - Upgrade Execa from v5 to v9
    >   - Update Execa imports to use named exports
    > - Upgrade Yargs from v16 to v18
    >   - Update option configuration for stricter type checking
    > - Update minimum Node.js requirement to v20 (Node.js 18 reached EOL in April 2025) [BREAKING CHANGE]
    > - Update GitHub workflow
    >   - Update matrix to Node.js 20/22
    >   - Update actions to latest versions
    >   - Update Docker to use selenium/standalone-firefox:latest

_Released by Yashar Fakhari on 2025-08-17._

## 0.4.1

- [`ef5479d`](https://github.com/mochify-js/cli/commit/ef5479deeee426e217af14ba7357308cee90254e)
  Improve stack trace mapping

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2023-12-28._

## 0.4.0

- [`d6eaa5f`](https://github.com/mochify-js/cli/commit/d6eaa5f839f1c5848f7f39d9e37b53af28e14aac)
  Add bundle-stdin option
- [`cc86645`](https://github.com/mochify-js/cli/commit/cc86645ba628dde2e6052fd35f3c1dc0e6c7e2f4)
  Fix mochify resources URL

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2023-12-27._

## 0.3.0

- Initial release

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2023-12-24._
