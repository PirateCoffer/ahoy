const _ = require('lodash')
const bs58 = require('bs58')
const nacl = require('tweetnacl')
const srng = require('seedrandom')
const srp = require('srp-js')
const tna = require('tweetnacl-auth')
const ed2c = require('ed2curve')
const ment = require('more-entropy')

class Crypto {
  static get lowlevel() {
    return {
      bs58,
      nacl,
      srng,
      tna,
      ment,
    }
  }
  static hash(input, numBytes, encode = true) {
    if (numBytes === 0 || numBytes === false)
      numBytes = 0
    else if (_.isNil(numBytes) || numBytes === true)
      numBytes = 32
    if (!Buffer.isBuffer(input))
      input = Buffer.from(input.toString())
    let output = nacl.hash(input)
    if (encode)
      output = bs58.encode(output).slice(0, numBytes)
    else
      output = output.slice(0, numBytes)
    return output
  }
  static rig(min, max, rng) {
    rng = this.getRng(rng)
    return Math.floor((max - min) * rng()) + min
  }
  static getRng(rng) {
    if (_.isString(rng) || _.isNumber(rng)) 
      rng = srng(rng)
    rng = rng || srng()
    return rng
  }
  static rint(rng) {
    rng = this.getRng(rng)
    return parseInt(Math.abs(rng.int32()))
  }
  static rand(rng) {
    return this.rint(rng).toString()
  }
  static rash(rng, numBytes) {
    return this.hash(this.rand(rng), numBytes)
  }
  static nmac(key, input, full = false, encode = true) {
    key = Buffer.from(key.toString())
    input = Buffer.from(input.toString())
    let output
    if (full) {
      output = tna.full(input, key)
    } else {
      output = tna(input, key)
    }
    return encode ? bs58.encode(Buffer.from(output)) : output
  }
  static kdf(key, input, outputs = 1, byteLen = 32) {
    let out = input ? this.nmac(key, input, true, false) : this.hash(key, null, false) 
    if (outputs === 1) {
      return bs58.encode(Buffer.from(out.subarray(0, byteLen)))
    }
    let len = Math.floor(64 / outputs)
    let outArr = []
    for (let ii = 0; ii < outputs; ii++) {
      let part = out.subarray(ii * len, (ii + 1) * len)
      part = this.hash(part, null, false).subarray(0, byteLen)
      outArr.push(bs58.encode(Buffer.from(part)))
    }
    return outArr
  }
}

module.exports = Crypto
