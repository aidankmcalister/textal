/**
 * Converts a string to title case (capitalizes the first letter of each word).
 * @param str - The string to convert
 * @returns The title-cased string
 * @example
 * titleCase('hello world') // 'Hello World'
 * titleCase('HELLO WORLD') // 'Hello World'
 * titleCase('hello-world') // 'Hello-World'
 */

export function titleCase(str: string): string {
  if (!str) return str;
  return str
    .toLowerCase()
    .replace(/ +/g, ' ')
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
