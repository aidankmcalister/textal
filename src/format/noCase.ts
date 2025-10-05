import { tokenizeWords } from '../utils/tokenizeWords.js';

/**
 * Converts a string to no case (space-delimited, lowercased words).
 * @param str - The string to convert
 * @returns The no cased string
 * @example
 * noCase('helloWorld') // 'hello world'
 * noCase('hello-world') // 'hello world'
 * noCase('HELLO_WORLD') // 'hello world'
 */

export function noCase(str: string): string {
  if (!str) return str;
  const words = tokenizeWords(str);
  return words.map((word) => word.toLowerCase()).join(' ');
}
