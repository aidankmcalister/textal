import { filterChars } from './filterChars.js';

/**
 * Keeps only alphabetic characters from a string.
 * @param str - The string to filter
 * @returns The string with only alphabetic characters
 * @example
 * onlyAlpha('hello123') // 'hello'
 * onlyAlpha('abc-def') // 'abcdef'
 * onlyAlpha('hello world!') // 'helloworld'
 */

export function onlyAlpha(str: string): string {
  return filterChars(str, { alpha: true });
}
