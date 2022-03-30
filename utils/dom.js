/**
 *
 * @param {String} selector Selector string to querry
 * @param {HTMLElement | Document} context Context to query - queries the document if not specified.
 * @returns {HTMLElement | null} The first element that matches the selector, or null if none found.
 */
export function qs(selector, context = document) {
  return context.querySelector(selector)
}

/**
 * Query Selector All utility function that returns an array of HTML elements.
 * @param {String} selector Selector string to query.
 * @param {HTMLElement | Document} context Context of our query - querries the document by default.
 * @returns {Array<HTMLElement>} Array of HTMLElements.
 */
export function qsa(selector, context = document) {
  /**
   * Query selector all doesn't return an array. We spread
   * the return into an array to make it an array.
   */
  return [...context.querySelectorAll(selector)]
}

/**
 * Get the first element that matches the selector, within a parent element or within the document if no context parameter is specified.
 * @param {String} id ID of the element to be returned
 * @param {HTMLElement | Document} context Parent element containing the element, or document if none is specified
 * @returns {HTMLElement} The element with the specified ID
 */
export function gebi(id, context = document) {
  return context.getElementById(id)
}

/**
 * Create an HTML element of a given type, with the given attributes (optional).
 * @param {HTMLElement} type Type of element to create
 * @param {Object} options Options to pass to the element
 * @returns {HTMLElement} HTML element of the desired type, with the options applied
 */
export function createElement(type, options = {}) {
  const el = document.createElement(type)
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      el.className = value
      return
    }
    if (key === 'dataset') {
      Object.entries(value).forEach(([key, value]) => {
        el.dataset[key] = value
      })
      return
    }
    if (key === 'text') {
      el.textContent = value
      return
    }
    el.setAttribute(key, value)
  })
  return el
}

/**
 * Adds a global event listener to the document or a specified parent element.
 * @param {Event} type Event type
 * @param {HTMLElement} selector Event target selector param
 * @param {Function} callback Callback function
 * @param {Object} options Event options
 * @param {HTMLElement | Document} parent Parent element (document by default)
 */
export function addGlobablEventListener(
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) {
        callback(e)
      }
    },
    options
  )
}
