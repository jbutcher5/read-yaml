'use strict'

const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs');
const yaml = require('js-yaml');

const main = async () => {
  const file = core.getInput('file');
  const key = core.getInput('key-path');

  let content = await fs.readFile(file, 'utf8');

  let yamlData = yaml.load(content);

  for (let i = 0; i < key.length; i++) yamlData = yamlData[key[i]];

  core.setOutput('data', yamlData);
}

main().catch(err => core.setFailed(err.message));
