# Read YAML

This action reads yaml data from a file and outputs the result.

## Inputs

## `file`

**Required** yaml file to read from.

## `key-path`

**Required** Path of keys to the value as a JSON list.

## Outputs

## `data`

Data read from YAML file.

## Example usage

name: Read YAML Data
uses: KJ002/read-yaml@v1.3
id: yaml-data
with:
  file: './file-to-read.yaml'
  key: '["key-to-read"]'
