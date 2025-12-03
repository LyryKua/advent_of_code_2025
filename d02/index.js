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
 * @param d {number}
 * @return {boolean}
 */
function isLengthDividable(nbr, d) {
  return nbr.toString().length % d === 0
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
 * @param nbr {number}
 * @return {boolean}
 */
function is3(nbr) {
  const str = nbr.toString()
  const c = 3
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is4(nbr) {
  const str = nbr.toString()
  const c = 4
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is5(nbr) {
  const str = nbr.toString()
  const c = 5
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is6(nbr) {
  const str = nbr.toString()
  const c = 6
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is7(nbr) {
  const str = nbr.toString()
  const c = 7
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is8(nbr) {
  const str = nbr.toString()
  const c = 8
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is9(nbr) {
  const str = nbr.toString()
  const c = 9
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is10(nbr) {
  const str = nbr.toString()
  const c = 10
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is11(nbr) {
  const str = nbr.toString()
  const c = 11
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is12(nbr) {
  const str = nbr.toString()
  const c = 12
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is13(nbr) {
  const str = nbr.toString()
  const c = 13
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is14(nbr) {
  const str = nbr.toString()
  const c = 14
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
}

/**
 * @param nbr {number}
 * @return {boolean}
 */
function is15(nbr) {
  const str = nbr.toString()
  const c = 15
  if (isLengthDividable(nbr, c)) {
    const arr = []
    for (let i = 0; i < nbr.toString().length; i += nbr.toString().length / c) {
      arr.push(str.slice(i, i + nbr.toString().length / c))
    }
    const base = arr[0]
    return arr.every(it => it === base)
  }
  return false
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
 * @param ranges {number[][]}
 * @return {number}
 */
function part2(ranges) {
  let answer = 0
  for (let range of ranges) {
    for (let i = range[0]; i <= range[1]; i++) {
      if (isTwice(i)
        || is3(i)
        || is4(i)
        || is5(i)
        || is6(i)
        || is7(i)
        || is8(i)
        || is9(i)
        || is10(i)
        || is11(i)
        || is12(i)
        || is13(i)
        || is14(i)
        || is15(i)) {
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
      return part2(ranges)
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
