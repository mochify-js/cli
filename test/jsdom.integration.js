'use strict';

const fs = require('fs');
const path = require('path');
const { assert } = require('@sinonjs/referee-sinon');
const { execa } = require('execa');

/**
 * @typedef {import('execa').ExecaError} ExecaError
 */

describe('jsdom', () => {
  async function run(file, ...extra_args) {
    try {
      const result = await execa(
        '../../index.js',
        [file, '--driver', 'jsdom', ...extra_args],
        {
          cwd: path.join(__dirname, 'fixture'),
          stderr: process.stderr
        }
      );
      return { ...result, failed: false };
    } catch (error) {
      const e = /** @type {ExecaError} */ (error);
      return { ...e, failed: true };
    }
  }

  it('passes', async () => {
    const result = await run('passes.js');

    assert.isFalse(result.failed);
    const stdout =
      typeof result.stdout === 'string'
        ? result.stdout
        : String(result.stdout ?? '');
    const json = JSON.parse(stdout);
    assert.equals(json.tests.length, 1);
    assert.equals(json.tests[0].fullTitle, 'test passes');
  });

  it('reads from stdin', async () => {
    let result;
    try {
      const cp = execa('../../index.js', ['--driver', 'jsdom', '-'], {
        cwd: path.join(__dirname, 'fixture')
      });
      const fixture = fs.createReadStream(
        path.resolve(__dirname, './fixture/passes.js')
      );
      fixture.pipe(/** @type {Object} */ (cp).stdin);
      const execaResult = await cp;
      result = { ...execaResult, failed: false };
    } catch (err) {
      const e = /** @type {ExecaError} */ (err);
      result = { ...e, failed: true };
    }

    assert.isFalse(result.failed);
    const stdout =
      typeof result.stdout === 'string'
        ? result.stdout
        : String(result.stdout ?? '');
    const json = JSON.parse(stdout);
    assert.equals(json.tests.length, 1);
    assert.equals(json.tests[0].fullTitle, 'test passes');
  });

  it('fails', async () => {
    const result = await run('fails.js');

    assert.isTrue(result.failed);
    const stdout =
      typeof result.stdout === 'string'
        ? result.stdout
        : String(result.stdout ?? '');
    const json = JSON.parse(stdout);
    assert.equals(json.tests.length, 1);
    assert.equals(json.tests[0].fullTitle, 'test fails');
  });

  it('does not leak client functions into global scope', async () => {
    const result = await run('client-leak.js');

    assert.isFalse(result.failed);
    const stdout =
      typeof result.stdout === 'string'
        ? result.stdout
        : String(result.stdout ?? '');
    const json = JSON.parse(stdout);
    assert.equals(json.tests.length, 1);
    assert.equals(
      json.tests[0].fullTitle,
      'test does not leak client functions into global scope'
    );
  });
});
