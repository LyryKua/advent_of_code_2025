import { getInput, parseInput } from '../lib/index.js'

const DAY = 3
const NAME = `\n\n--- Day ${DAY}: Lobby ---`

/**
 * @param bank {number[]}
 * @return {[number, number]}
 */
function findMax(bank) {
  let maxIndex = 0
  for (let i = 0; i < bank.length; i++) {
    if (bank[i] > bank[maxIndex]) {
      maxIndex = i
    }
  }
  return [ bank[maxIndex], maxIndex ]
}

/**
 * @param bank {number[]}
 * @return {[number, number]}
 */
function findFirstMax(bank) {
  let maxIndex = 0
  for (let i = 0; i < bank.length; i++) {
    if (bank[i] > bank[maxIndex]) {
      maxIndex = i
    }
  }
  if (maxIndex === bank.length - 1) {
    return findMax(bank.slice(0, -1))
  }
  return [ bank[maxIndex], maxIndex ]
}

/**
 * @param banks {number[][]}
 * @return {number}
 */
function part1(banks) {
  let answer = 0
  for (let bank of banks) {
    const [ firstMax, firstMaxIndex ] = findFirstMax(bank)
    const rest = bank.slice(firstMaxIndex + 1)
    const [ secondMax ] = findMax(rest)
    const tmp = 10 * firstMax + secondMax
    answer += tmp
  }
  return answer
}

/**
 * @param banks {number[][]}
 * @return {number}
 */
function part2(banks) {
  let answer = 0
  for (let bank of banks) {
    const [ max1, maxIndex1 ] = findMax(bank.slice(0, -11))
    const [ max2, maxIndex2 ] = findMax(bank.slice(maxIndex1 + 1, -10))
    const newMaxIndex2 = maxIndex2 + maxIndex1 + 1
    const [ max3, maxIndex3 ] = findMax(bank.slice(newMaxIndex2 + 1, -9))
    const newMaxIndex3 = maxIndex3 + newMaxIndex2 + 1
    const [ max4, maxIndex4 ] = findMax(bank.slice(newMaxIndex3 + 1, -8))
    const newMaxIndex4 = maxIndex4 + newMaxIndex3 + 1
    const [ max5, maxIndex5 ] = findMax(bank.slice(newMaxIndex4 + 1, -7))
    const newMaxIndex5 = maxIndex5 + newMaxIndex4 + 1
    const [ max6, maxIndex6 ] = findMax(bank.slice(newMaxIndex5 + 1, -6))
    const newMaxIndex6 = maxIndex6 + newMaxIndex5 + 1
    const [ max7, maxIndex7 ] = findMax(bank.slice(newMaxIndex6 + 1, -5))
    const newMaxIndex7 = maxIndex7 + newMaxIndex6 + 1
    const [ max8, maxIndex8 ] = findMax(bank.slice(newMaxIndex7 + 1, -4))
    const newMaxIndex8 = maxIndex8 + newMaxIndex7 + 1
    const [ max9, maxIndex9 ] = findMax(bank.slice(newMaxIndex8 + 1, -3))
    const newMaxIndex9 = maxIndex9 + newMaxIndex8 + 1
    const [ max10, maxIndex10 ] = findMax(bank.slice(newMaxIndex9 + 1, -2))
    const newMaxIndex10 = maxIndex10 + newMaxIndex9 + 1
    const [ max11, maxIndex11 ] = findMax(bank.slice(newMaxIndex10 + 1, -1))
    const newMaxIndex11 = maxIndex11 + newMaxIndex10 + 1
    const [ max12 ] = findMax(bank.slice(newMaxIndex11 + 1))
    const tmp =
      100000000000 * max1
      + 10000000000 * max2
      + 1000000000 * max3
      + 100000000 * max4
      + 10000000 * max5
      + 1000000 * max6
      + 100000 * max7
      + 10000 * max8
      + 1000 * max9
      + 100 * max10
      + 10 * max11
      + 1 * max12
    answer += tmp
  }
  return answer
}

/**
 * @param input {string}
 * @param part {number}
 * @returns {number}
 */
function main(input, part) {
  const banks = parseInput(input).map(line => line.split('').map(n => parseInt(n)))
  switch (part) {
    case 1:
      return part1(banks)
    case 2:
      return part2(banks)
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
