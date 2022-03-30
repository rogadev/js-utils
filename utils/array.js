import { randomNumberBetween } from './misc.js'

/**
 * Returns the first element, or the first n number of elements, from an array.
 * @param {Array} array
 * @param {Number} n
 * @returns the first element, or the first n number of elements, from an array.
 */
export function first(array, n = 1) {
  if (n !== 1) {
    n = Math.round(+n)
    return array.filter((_, i) => i < n)
  }
  return array[0]
}

/**
 * Returns the last element, or the last n number of elements, from an array.
 * @param {Array} array
 * @param {Number} n
 * @returns the last element, or the last n number of elements, from an array.
 */
export function last(array, n = 1) {
  if (n !== 1) {
    if (+n === NaN)
      throw new Error(
        `Invalid parameter type passed to last(). Expects type of Number, or type that can be cohersed to a Number, but instead received type '${typeof n}'.`
      )
    n = Math.round(+n)
    return array.filter((_, i) => i >= array.length - n)
  }
  return array[array.length - 1]
}

/**
 * Returns a random element from an array.
 * @param {Array} array Array to sample.
 * @returns Random value from the Array.
 */
export function sample(array) {
  return array[randomNumberBetween(0, array.length - 1)]
}

/**
 * Returns an array of just the values of the given key from an array of objects.
 * @param {Array<Object>} array The array of objects to pluck from
 * @param {String} key The key to pluck from the array
 * @returns New array with just the plucked values from the array of objects.
 * @example pluck([{a: 1}, {a: 2}, {a: 3}], 'a') // [1, 2, 3]
 */
export function pluck(array, key) {
  return array.map((element) => element[key])
}

/**
 *
 * @param {Array<Object>} array The array of objects to pluck from
 * @param {String} key The key to pluck from the objects.
 * @returns See Example.
 * @example groupBy([{a: 1}, {a: 2}, {a: 3}], 'a') // {1: [{a: 1}], 2: [{a: 2}], 3: [{a: 3}]}
 */
export function groupBy(array, key) {
  return array.reduce((group, element) => {
    const value = element[key]
    return { ...group, [value]: [...(group[value] ?? []), element] }
  }, {})
}
