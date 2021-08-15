<img align="right" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/YAML_Logo.svg" width=150></img>
# Read YAML

This action reads yaml data from a file and outputs the result.

### Inputs
---
- **`file` Required** yaml file to read from.

- **`key-path` Required** Path of keys to the value as a JSON list.

### Outputs
---

- **`data`** Data read from YAML file.

### Example usage

``` yaml
name: Read YAML Data
uses: KJ002/read-yaml@v1.5
id: yaml-data
with:
  file: './action.yaml'
  key-path: '["runs", "using"]' # Access the runs key then the using key and retuns the value.
```

