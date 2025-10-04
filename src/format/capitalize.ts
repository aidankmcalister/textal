/**
 * Capitalizes the first letter of a string and makes the rest lowercase.
 * @param str - The string to capitalize
 * @returns The capitalized string
 * @example
 * capitalizeText('hello world') // 'Hello world'
 * capitalizeText('HELLO WORLD') // 'Hello world'
 * capitalizeText('') // ''
 */

export function capitalizeText(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }