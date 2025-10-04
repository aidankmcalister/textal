/**
 * Pads the end of a string with a specified character to reach a target length.
 * @param str - The string to pad
 * @param length - The target length
 * @param fillChar - The character to pad with (default: ' ')
 * @returns The padded string
 * @example
 * padEnd('hello', 10) // 'hello     '
 * padEnd('hello', 10, '0') // 'hello00000'
 * padEnd('hello', 3) // 'hello'
 */

export function padEnd(str: string, length: number, fillChar: string = ' '): string {
  if (!str) str = '';
  return str.padEnd(length, fillChar);
}
