const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const yaml = require('js-yaml');

try {
  const file = core.getInput('file');
  const key = core.getInput('key');

  let content = fs.readFile(file, function (err, data) {
    if(err) console.log(err);
  });

  let yamlData = yaml.load(content);

  core.setOutput('data', yamlData[key]);
} catch (e) {
  console.log(e);
}
