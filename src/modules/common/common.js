const _ = exports._ = require('lodash')
const moment = exports.moment = require('moment')
const numeral = exports.numeral = require('numeral')
const log = exports.log = console.log.bind(console)

exports.explode = (_global = global) => {
  for (const key in exports)
    _global[key] = exports[key]
}
