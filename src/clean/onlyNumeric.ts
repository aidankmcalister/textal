import { filterChars } from './filterChars';

/**
 * Keeps only numeric characters from a string.
 * @param str - The string to filter
 * @returns The string with only numeric characters
 * @example
 * onlyNumeric('abc123') // '123'
 * onlyNumeric('price: $45.99') // '4599'
 * onlyNumeric('hello world') // ''
 */

export function onlyNumeric(str: string): string {
  return filterChars(str, { numeric: true });
}
