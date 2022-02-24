<img align="right" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/YAML_Logo.svg" width=150></img>
# Read YAML

This action reads yaml data from a file and outputs the result.

## IO

Input and output variables used by read-yaml

### Inputs
- **`file` Required** yaml file to read from.

- **`key-path` Required** Path of keys to the value as a JSON list.

### Outputs
- **`data`** Data read from YAML file.

## Example usage

``` yaml
on: [ push, pull_request ]

jobs:
  test-yaml-reader:
    runs-on: ubuntu-latest
    name: Test read-yaml
    steps:
      - uses: actions/checkout@v1

      - name: Run read-yaml action
        id: yaml-data
        uses: KJ002/read-yaml@main      # You may wish to replace main with a version tag such as '1.5' etc.
         with:
          file: './action.yml'          # File to read from
          key-path: '["runs", "using"]' # Access the runs key then the using key and retuns the value.

      - name: Display read-yaml output
        run: echo "${{ steps.yaml-data.outputs.data }}"
```

## Contributing and Local Development
Check the [CONTRIBUTING](./CONTRIBUTING.md) guidelines for information on how to contribute
to read-yaml

