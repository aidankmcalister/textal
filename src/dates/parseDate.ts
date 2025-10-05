/**
 * Parse string into Date object
 * @param str - The string to parse
 * @returns The parsed Date object
 * @throws {Error} If string is not a valid date
 * @example
 * parseDate('2024-01-15') // Date object for Jan 15, 2024
 * parseDate('2024-01-15T14:30:45') // Date object with time
 * parseDate('invalid') // throws Error
 */
export function parseDate(str: string): Date {
  if (typeof str !== 'string') {
    throw new Error('Invalid date string');
  }

  if (str.trim() === '') {
    throw new Error('Invalid date string');
  }

  if (isNaN(Date.parse(str))) {
    throw new Error('Invalid date string');
  }

  return new Date(str);
}
