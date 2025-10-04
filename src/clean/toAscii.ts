/**
 * Converts a string to ASCII by removing diacritics via Unicode normalization.
 * @param str - The string to convert
 * @returns The ASCII version of the string
 * @example
 * toAscii('caf�') // 'cafe'
 * toAscii('na�ve') // 'naive'
 * toAscii('Z�rich') // 'Zurich'
 */

export function toAscii(str: string): string {
  if (!str) return str;
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
