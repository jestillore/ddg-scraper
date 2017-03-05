
'use strict'

const request = require('request')
const cheerio = require('cheerio')

class DuckDuckGoScrapper {
  static search (opts, cb) {
    let urls = []
    request(`https://duckduckgo.com/html?q=${escape(opts.q)}`, (error, response, body) => {
      if (!error) {
        let max = opts.max || 0
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
