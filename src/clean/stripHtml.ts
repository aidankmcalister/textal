/**
 * Removes HTML tags from a string, leaving only text content.
 * @param str - The string to strip HTML from
 * @returns The string with HTML tags removed
 * @example
 * stripHtml('<p>hello</p>') // 'hello'
 * stripHtml('<div>hello <b>world</b></div>') // 'hello world'
 * stripHtml('plain text') // 'plain text'
 */

export function stripHtml(str: string): string {
  if (!str) return str;
  return str.replace(/<[^>]*>/g, '');
}
