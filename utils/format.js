const NUMBER_FORMATTER = new Intl.NumberFormat(undefined)
const RELATIVE_DATE_FORMATTER = new Intl.RelativeTimeFormat(undefined, {
  numeric: 'auto',
})

/**
 * Uses the Intl.NumberFormat to format a currency value.
 * @param {Number} number The value/number to format
 * @param {String} currency The currency to format the number with (defaults to 'USD')
 * @returns The formatted output.
 */
export function formatCurrency(number, currency = 'USD') {
  try {
    return NUMBER_FORMATTER.style(currency).format(
      Number.parseFloat(number),
      currency
    )
  } catch (e) {
    throw new Error(
      `Invalid value passed to formatCurrency(), type of '${typeof number}', value`,
      number,
      e
    )
  }
}

/**
 * Formats large numbers into a more compact format.
 * @param {Number} number The number to format.
 * @returns Formatted compact number.
 * @example formatCompactNumber(1000000) // 1M
 */
export function formatCompactNumber(number) {
  return NUMBER_FORMATTER.notation('compact').format(number)
}

/**
 * Formats regular numbers based on locale.
 * @param {Number} number The number to format.
 * @returns Formatted number based on locale.
 */
export function formatNumber(number) {
  return NUMBER_FORMATTER.format(number)
}

export function formatRelativeDate(toDate, fromDate = new Date()) {
  const DIVISIONS = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' },
  ]
  if (toDate instanceof Date) {
    toDate = new Date(toDate)
  }
  if (fromDate instanceof Date) {
    fromDate = new Date(fromDate)
  }
  let duration = (toDate - fromDate) / 1000
  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return RELATIVE_DATE_FORMATTER.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}
