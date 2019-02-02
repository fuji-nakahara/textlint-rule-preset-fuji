# textlint-rule-preset-fuji

Fuji Nakahara's [textlint rule preset](https://github.com/textlint/textlint/blob/master/docs/rule-preset.md) for Japanese novels.

## Installation

    npm install textlint-rule-preset-fuji

## Usage

Via `.textlintrc`:

```json
{
  "rules": {
    "preset-fuji": true
  }
}
```

Via CLI:

    textlint --preset textlint-rule-preset-fuji README.md

See [lib/textlint-rule-preset-fuji.js](./lib/textlint-rule-preset-fuji.js) for details of the rules.
