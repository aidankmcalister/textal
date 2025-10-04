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
  if (!str) return str;
  return str.replace(/[^\w\s]|_/g, '');
}
