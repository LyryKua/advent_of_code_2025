import {
  getAllNeighbors,
  getInput,
  isElemEqual,
  isInside,
  parseInput,
} from '../lib/index.js'

const DAY = 4
const NAME = `\n\n--- Day ${DAY}: Printing Department ---`

/**
 * @param grid {string[][]}
 * @return {number}
 */
function part1(grid) {
  let answer = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!isElemEqual(grid, [i,j], '@')) {
        continue
      }
      let rolls = 0
      let neighbors = getAllNeighbors(grid, [i,j])
      for (let neighbor of neighbors) {
        if (isInside(grid, neighbor) && isElemEqual(grid, neighbor, '@')) {
          rolls += 1
        }
      }
      if (rolls < 4) {
        answer += 1
      }
    }
  }
  return answer
}

/**
 * @param grid {string[][]}
 * @return {number}
 */
function part2(grid) {
  let answer = 0
  let flag = true
  while (flag) {
    flag = false
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (!isElemEqual(grid, [i,j], '@')) {
          continue
        }
        let rolls = 0
        let neighbors = getAllNeighbors(grid, [i,j])
        for (let neighbor of neighbors) {
          if (isInside(grid, neighbor) && isElemEqual(grid, neighbor, '@')) {
            rolls += 1
          }
        }
        if (rolls < 4) {
          answer += 1
          grid[i][j] = 'x'
          flag = true
        }
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
  const grid = parseInput(input).map(line => line.split(''))
  switch (part) {
    case 1:
      return part1(grid)
    case 2:
      return part2(grid)
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
