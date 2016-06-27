import test from 'ava'
import getTransformer from './'
const names = require('./transformers-names.json')

test('gets random transformer', t => {
  t.true(isValidName(getTransformer()))
})

test('gets multiple random transformers', t => {
  t.true(areValidNames(getTransformer(3)))
})

test('exports all the names', t => {
  t.deepEqual(getTransformer.all, names)
})

function isValidName(name) {
  return names.some(n => name === n)
}

function areValidNames(multipleNames) {
  return multipleNames.every(isValidName)
}
