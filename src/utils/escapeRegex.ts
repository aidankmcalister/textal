/**
 * Escapes special regex characters in a string to use it as a literal in RegExp.
 * @param str - The string to escape
 * @returns The string with regex special characters escaped
 * @example
 * escapeRegex('hello.world') // 'hello\\.world'
 * escapeRegex('$100') // '\\$100'
 * escapeRegex('[test]') // '\\[test\\]'
 */

export function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
