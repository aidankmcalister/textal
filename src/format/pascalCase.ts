import { tokenizeWords } from '../utils/tokenizeWords.js';

/**
 * Converts a string to PascalCase.
 * @param str - The string to convert
 * @returns The PascalCased string
 * @example
 * pascalCase('hello world') // 'HelloWorld'
 * pascalCase('hello-world') // 'HelloWorld'
 * pascalCase('hello_world') // 'HelloWorld'
 */

export function pascalCase(str: string): string {
  if (!str) return str;
  const words = tokenizeWords(str);
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}
