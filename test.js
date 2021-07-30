const fs = require('fs');
const yaml = require('js-yaml');

try {
  //const file = core.getInput('file');
  //const key = core.getInput('key');

  let content = fs.readFileSync('./action.yml', 'utf8');
  let yamlData = yaml.load(content);

  console.log(yamlData["name"]);
} catch (e) {
  console.log(e);
}
