/**
 * Tokenizes a string into an array of words.
 * Splits on non-alphanumeric characters and camelCase boundaries.
 * @param str - The string to tokenize
 * @returns Array of words
 * @example
 * tokenizeWords('hello world') // ['hello', 'world']
 * tokenizeWords('hello-world foo_bar') // ['hello', 'world', 'foo', 'bar']
 * tokenizeWords('helloWorld') // ['hello', 'World']
 */

export function tokenizeWords(str: string): string[] {
  if (!str) return [];
  // Split on non-alphanumeric and also split camelCase
  return (
    str
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
      .match(/[a-zA-Z0-9]+/g) || []
  );
}
