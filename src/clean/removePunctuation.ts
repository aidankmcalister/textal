import { filterChars } from './filterChars';

/**
 * Removes punctuation characters from a string.
 * @param str - The string to remove punctuation from
 * @returns The string with punctuation removed
 * @example
 * removePunctuation('hello, world!') // 'hello world'
 * removePunctuation('what?') // 'what'
 * removePunctuation('a-b-c') // 'abc'
 */

export function removePunctuation(str: string): string {
  return filterChars(str, { alpha: true, numeric: true, spaces: true });
}
