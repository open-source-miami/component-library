/**
 * Returns the given `str` but with the first
 * character capitalized.
 *
 * @param str String to transform.
 *
 * @return Transformed string.
 */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export default {
  capitalize
}
