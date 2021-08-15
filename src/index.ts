import * as core from '@actions/core'
import { promises as fs } from 'fs'
import * as yaml from 'js-yaml'

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

        for (let i = 0; i < keys.length; i++) {
            yamlData = (yamlData as any)[keys[i]]
        }

        core.setOutput('data', yamlData)
    } catch (error) {
        core.setFailed((error as Error).message)
    }
}

run()
