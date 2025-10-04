import { tokenizeWords } from '../utils/tokenizeWords';

/**
 * Converts a string to CONSTANT_CASE.
 * @param str - The string to convert
 * @returns The CONSTANT_CASED string
 * @example
 * constantCase('hello world') // 'HELLO_WORLD'
 * constantCase('helloWorld') // 'HELLO_WORLD'
 * constantCase('hello-world') // 'HELLO_WORLD'
 */

export function constantCase(str: string): string {
  if (!str) return str;
  const words = tokenizeWords(str);
  return words.map((word) => word.toUpperCase()).join('_');
}
