const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const yaml = require('js-yaml');

try {
  const file = core.getInput('file');
  const key = core.getInput('key');

  let content = fs.readFile(file, 'utf8');
  let yamlData = yaml.load(content);

  core.setOutput('data', yamlData[key]);
} catch (e) {
  console.log(e);
}
