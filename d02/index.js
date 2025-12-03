import { getInput } from '../lib/index.js'

const DAY = 2
const NAME = `\n\n--- Day ${DAY}: Gift Shop ---`

/**
 * @param nbr {number}
 * @return {boolean}
 */
function isEvenLength(nbr) {
  return nbr.toString().length % 2 === 0
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function isTwice(nbr) {
  const str = nbr.toString()
  const first = str.slice(0, str.length / 2)
  const second = str.slice(str.length / 2)
  return isEvenLength(nbr) && first === second
}

/**
 * @param ranges {number[][]}
 * @return {number}
 */
function part1(ranges) {
  let answer = 0
  for (let range of ranges) {
    for (let i = range[0]; i <= range[1]; i++) {
      if (isEvenLength(i) && isTwice(i)) {
        answer += i
      }
    }
  }
  return answer
}

/**
 * @param input {string}
 * @param part {number}
 * @returns {number}
 */
function main(input, part) {
  const ranges = input.split(',').map(range => range.split('-').map(it => parseInt(it)))
  switch (part) {
    case 1:
      return part1(ranges)
    case 2:
      return part
    default:
      throw new Error(`Only 2 parts. There is no part ${part}`)
  }
}

console.log(NAME)
getInput(DAY)
  .then(input => {
    const part1Result = main(input, 1)
    console.log('p1:', part1Result)

    const part2Result = main(input, 2)
    console.log('p2:', part2Result)
  })
