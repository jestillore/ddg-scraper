
DuckDuckGo Scaper for NodeJS

Requires Node >=4.0.0.

## Installation

```bash
npm install ddg-scraper
```

## Example

```js
const ddg = require('ddg-scraper')

ddg.search({
  q: 'Albert Einstein',
  max: 5
}, (err, urls) => {
  if (!err) {
    console.log(urls)
  }
})
```

## Usage

### Functions

#### `ddg.search(opts, callback)`

`opts` - Object

* `q` - String (required): Your search query
* `max` - Integer (optional): Maximum number of results
* See [https://duckduckgo.com/params](https://duckduckgo.com/params) for more optional params

`callback` - Function (required) : Called with `(err, info)` once the request has completed. `err` contains an error, if any, and `info` is an array of string urls.
