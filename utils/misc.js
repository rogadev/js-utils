/**
 * Generate a random number between min and max, inclusive.
 * @param {Number} min Minimum value, inclusive.
 * @param {Number} max Maximum value, inclusive.
 * @returns {Number} A random integer between min (inclusive) and max (inclusive).
 */
export function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Sudosleep the thread for a given number of milliseconds.
 * @usage sleep(1000).then(() => { SOME_ACTION })
 * @param {Number} duration Time in milliseconds
 * @returns {Promise} Promise that resolves after the specified duration
 */
export function sleep(duration) {
  if (typeof duration !== 'number') {
    const originalValue = duration
    duration = Number.parseInt(duration)
    if (Number.isNaN(duration)) {
      throw new Error(
        `Invalid parameter type passed to sleep(). Expects type of Number, or type that can be cohersed to a Number, but instead received type '${typeof duration}'. Original value: ${originalValue}`
      )
    }
  }
  return new Promise((resolve) => setTimeout(resolve, duration))
}

/**
 * Memoizes a callback function.
 * @param {Function} callback Callback function to memozie.
 * @returns Result either the result of the callback, or the result of the memoized call to the callback from cache.
 */
export function memoize(callback) {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = callback(...args)
    cache.set(key, result)
    return result
  }
}
