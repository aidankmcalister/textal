/**
 * Returns the byte length of a string in UTF-8 encoding.
 * @param str - The string to measure
 * @returns The byte length
 * @example
 * byteLength('hello') // 5
 * byteLength('café') // 5 (é is 2 bytes in UTF-8)
 * byteLength('👋') // 4
 */

export function byteLength(str: string): number {
  if (!str) return 0;
  return new TextEncoder().encode(str).length;
}
