#!/usr/bin/env node
'use strict';

const yargs = require('yargs');
const { mochify } = require('@mochify/mochify');

/**
 * @typedef {import('@mochify/mochify').MochifyOptions} MochifyOptions
 * @typedef {import('yargs').ArgumentsCamelCase<{
 * config?: string;
 * driver?: string;
 * 'driver-option'?: string;
 * reporter?: string;
 * bundle?: string;
 * 'bundle-stdin'?: string;
 * esm?: boolean;
 * serve?: string;
 * 'server-option'?: string;
 * }>} CliArgs
 */

const opts = yargs(process.argv.slice(2))
  .usage('$0 [config] <spec...>')
  .option('config', {
    alias: 'C',
    type: 'string',
    group: 'Options:',
    describe: 'Specify a config file, skipping default lookup'
  })
  .option('driver', {
    alias: 'D',
    type: 'string',
    group: 'Options:',
    describe: 'Specify the driver module'
  })
  .option('driver-option', {
    type: 'string',
    group: 'Options:',
    describe: 'Pass options to the driver'
  })
  .option('reporter', {
    alias: 'R',
    type: 'string',
    group: 'Options:',
    describe: 'Specify the Mocha reporter'
  })
  .option('bundle', {
    alias: 'B',
    type: 'string',
    group: 'Options:',
    describe: 'Bundle the resolved spec using the given command'
  })
  .option('bundle-stdin', {
    type: 'string',
    group: 'Options:',
    describe:
      'Pass a synthetic file as stdin to the bundler with "require" or "import" statements for each spec file'
  })
  .option('esm', {
    type: 'boolean',
    group: 'Options:',
    describe: 'Run a local web server, inject spec files as ES modules'
  })
  .option('serve', {
    alias: 'S',
    type: 'string',
    group: 'Options:',
    describe:
      'Run tests in the context of a local web server, serve the given directory'
  })
  .option('server-option', {
    type: 'string',
    group: 'Options:',
    describe: 'Pass options to the server (requires --serve or --esm)'
  })
  .updateStrings({
    'Options:': 'Other:'
  })
  .example(
    '$0 --driver puppeteer --bundle browserify "./src/**/*.test.js"',
    'Bundle all files matching the given spec using browserify and run them using @mochify/driver-puppeteer.'
  )
  .example(
    '$0 --driver playwright --bundle esbuild --bundle-stdin "require" "./src/**/*.test.js"',
    'Bundle all files matching the given spec using esbuild and run them using @mochify/driver-playwright.'
  )
  .example(
    '$0 --esm --reporter dot --driver puppeteer "./src/**/*.test.js"',
    'Run all tests matching the given spec as ES modules in puppeteer and use the "dot" reporter for output.'
  )
  .example(
    '$0 "./src/**/*.test.js"',
    'Run all tests matching the given spec using the default configuration lookup.'
  )
  .example(
    '$0 --config mochify.webdriver.js "./src/**/*.test.js"',
    'Run all tests matching the given spec using the configuration from mochify.webdriver.js.'
  )
  .example(
    'browserify "./src/**/*.test.js" | $0 -',
    'Read a bundled test suite from stdin.'
  )
  .epilogue(
    `Mochify Resources:
GitHub: https://github.com/mochify-js`
  )
  .wrap(process.stdout.columns ? Math.min(process.stdout.columns, 80) : 80)
  .parse();

/** @type {CliArgs & { _: (string | number)[]; $0: string }} */
const yargsResult =
  /** @type {CliArgs & { _: (string | number)[]; $0: string }} */ (opts);

/** @type {MochifyOptions} */
const mochifyOpts = {};

if (yargsResult.config) {
  mochifyOpts.config = yargsResult.config;
}
if (yargsResult.driver) {
  mochifyOpts.driver = yargsResult.driver;
}
if (yargsResult.reporter) {
  mochifyOpts.reporter =
    /** @type {import('@mochify/mochify').MochifyOptions['reporter']} */ (
      yargsResult.reporter
    );
}
if (yargsResult.bundle) {
  mochifyOpts.bundle = yargsResult.bundle;
}
if (yargsResult.esm) {
  mochifyOpts.esm = yargsResult.esm;
}
if (yargsResult.serve) {
  mochifyOpts.serve = yargsResult.serve;
}

if (yargsResult['driver-option']) {
  mochifyOpts.driver_options = yargsResult['driver-option'];
}
if (yargsResult['server-option']) {
  mochifyOpts.server_options = yargsResult['server-option'];
}
if (yargsResult['bundle-stdin']) {
  mochifyOpts.bundle_stdin = /** @type {'require' | 'import'} */ (
    yargsResult['bundle-stdin']
  );
}

if (yargsResult._.length) {
  if (yargsResult._[0] === '-') {
    mochifyOpts.spec = process.stdin;
  } else {
    mochifyOpts.spec = /** @type {string[]} */ (yargsResult._);
  }
}

mochify(mochifyOpts)
  .catch((err) => {
    console.error(err.stack);
    return { exit_code: 1 };
  })
  .then(({ exit_code }) => {
    process.exitCode = exit_code;
  });
