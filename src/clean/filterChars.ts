/**
 * Filters characters from a string based on specified criteria.
 * @param str - The string to filter
 * @param opts - Filter options
 * @param opts.alpha - Keep alphabetic characters
 * @param opts.numeric - Keep numeric characters
 * @param opts.spaces - Keep space characters
 * @param opts.punctuation - Keep punctuation
 * @param opts.extras - Additional regex pattern to remove
 * @returns The filtered string
 * @example
 * filterChars('hello123', { alpha: true }) // 'hello'
 * filterChars('hello123', { numeric: true }) // '123'
 * filterChars('hello, world!', { alpha: true, spaces: true }) // 'hello world'
 */

export interface FilterCharsOptions {
  alpha?: boolean;
  numeric?: boolean;
  spaces?: boolean;
  punctuation?: boolean;
  extras?: RegExp;
}

export function filterChars(str: string, opts: FilterCharsOptions = {}): string {
  if (!str) return str;

  const { alpha, numeric, spaces, punctuation, extras } = opts;

  // If no options are specified, return the original string
  if (!alpha && !numeric && !spaces && !punctuation && !extras) {
    return str;
  }

  let pattern = '[^';

  if (alpha) pattern += 'a-zA-Z';
  if (numeric) pattern += '0-9';
  if (spaces) pattern += ' \\t\\n\\r';
  if (punctuation) pattern += '\\p{P}';

  pattern += ']';

  const flags = punctuation ? 'gu' : 'g';
  let result = str.replace(new RegExp(pattern, flags), '');

  // Apply extras pattern if provided
  if (extras) {
    result = result.replace(extras, '');
  }

  return result;
}
