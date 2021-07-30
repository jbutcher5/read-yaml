'use strict'

const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs');
const yaml = require('js-yaml');

const main = async () => {
  const file = core.getInput('file');
  const key = core.getInput('key');

  let content = await fs.readFile(file, 'utf8');

  let yamlData = yaml.load(content);

  core.setOutput('data', yamlData[key]);
}

main().catch(err => core.setFailed(err.message));
