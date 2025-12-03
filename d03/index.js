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
      return part
    default:
      throw new Error(`Only 2 parts. There is no part ${part}`)
  }
}

console.log(NAME)
getInput(DAY)
  .then(input => {
//     const input = `987654321111111
// 811111111111119
// 234234234234278
// 818181911112111`
    const part1Result = main(input, 1)
    console.log('p1:', part1Result)

    const part2Result = main(input, 2)
    console.log('p2:', part2Result)
  })
