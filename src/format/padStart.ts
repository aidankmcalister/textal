/**
 * Pads the start of a string with a specified character to reach a target length.
 * @param str - The string to pad
 * @param length - The target length
 * @param fillChar - The character to pad with (default: ' ')
 * @returns The padded string
 * @example
 * padStart('hello', 10) // '     hello'
 * padStart('hello', 10, '0') // '00000hello'
 * padStart('hello', 3) // 'hello'
 */

export function padStart(str: string, length: number, fillChar: string = ' '): string {
  if (!str) str = '';
  return str.padStart(length, fillChar);
}
