
'use strict'

const request = require('request')
const cheerio = require('cheerio')

class DuckDuckGoScrapper {
  static search (opts, cb) {
    let urls = []
    let max = opts.max || 0

    delete opts.max

    // See https://duckduckgo.com/params for more arams

    request({
      baseUrl: `https://duckduckgo.com/html`,
      qs: opts
    }, (error, response, body) => {
      if (!error) {
        let $ = cheerio.load(body)
        let links = $('#links .links_main a.result__a')
        links.each((i, elem) => {
          if ((max > 0 && urls.length < max) || max === 0) {
            let url = $(elem).attr('href')
            url = unescape(url.substring(url.indexOf('http')))
            urls.push(url)
          }
        })
      }
      if (cb) cb(error, urls)
    })
  }
}

module.exports = DuckDuckGoScrapper
