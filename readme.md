# babel-plugin-replace-require-suffix
replace file suffix in `require("filepath.suffix")`

## install 
```bash
npm i babel-plugin-replace-require-suffix --save-dev
```

## example

#### replace `require('index.scss')` to `require('index.css')`

babel config
```json
{
  "plugins": [
          [
            "replace-require-suffix",
            {
              "from": "scss",
              "to": "css"
            }
          ]
        ]
}
```
org code
```js
require('./index.scss');
```
out code
```js
require('./index.css');
```