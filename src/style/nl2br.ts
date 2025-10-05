import { escapeHtml } from '../clean/escapeHtml.js';

/**
 * Converts newlines to HTML <br> tags.
 * @param str - The string to convert
 * @returns The string with newlines replaced by <br> tags
 * @example
 * nl2br('hello\nworld') // 'hello<br>world'
 * nl2br('line1\nline2\nline3') // 'line1<br>line2<br>line3'
 */

export function nl2br(str: string): string {
  if (!str) return str;
  return escapeHtml(str).replace(/\n/g, '<br>');
}
