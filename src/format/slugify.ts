import { toAscii } from '../clean/toAscii.js';
import { filterChars } from '../clean/filterChars.js';

/**
 * Converts a string to a URL-friendly slug.
 * @param str - The string to slugify
 * @param opts - Slugify options
 * @param opts.lower - Convert to lowercase (default: true)
 * @param opts.separator - Word separator (default: '-')
 * @returns The slugified string
 * @example
 * slugify('Hello World') // 'hello-world'
 * slugify('Hello World', { separator: '_' }) // 'hello_world'
 * slugify('Café Bar', { lower: false }) // 'Cafe-Bar'
 */

export interface SlugifyOptions {
  lower?: boolean;
  separator?: string;
}

export function slugify(str: string, opts: SlugifyOptions = {}): string {
  if (!str) return str;

  const { lower = true, separator = '-' } = opts;

  let result = toAscii(str);
  result = filterChars(result, { alpha: true, numeric: true, spaces: true });
  result = result.trim();
  result = result.replace(/\s+/g, separator);

  if (lower) {
    result = result.toLowerCase();
  }

  return result;
}
