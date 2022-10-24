import * as core from '@actions/core'
import { promises as fs } from 'fs'
import * as yaml from 'js-yaml'

function setOutput(key, value) {
  // Temporary hack until core actions library catches up with github new recommendations
  const output = process.env['GITHUB_OUTPUT']
  fs.appendFileSync(output, `${key}=${value}`)
}

const run = async () => {
    try {
        const file = core.getInput('file')
        const keys: string[] = JSON.parse(core.getInput('key-path'))

        const content = await fs.readFile(file, 'utf8')

        let yamlData = yaml.load(content)

        if (yamlData == null || yamlData == undefined) {
            core.setFailed('Error in reading the yaml file')
            return
        }

        let output = keys.reduce((dict, key) => dict[key], yamlData)
        setOutput('data', output)
    } catch (error) {
        core.setFailed((error as Error).message)
    }
}

run()
