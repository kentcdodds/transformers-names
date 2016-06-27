import uniqueRandomArray from 'unique-random-array'

const transformersNames = require('./transformers-names.json')
const getRandomItem = uniqueRandomArray(transformersNames)

// bunch of exports stuff for compat with various module stuff
random.all = transformersNames
module.exports = random
export {transformersNames as all, random as default}

function random(number) {
  if (number === undefined) {
    return getRandomItem()
  } else {
    const randomItems = []
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem())
    }
    return randomItems
  }
}
