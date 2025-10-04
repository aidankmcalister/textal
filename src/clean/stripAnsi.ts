/**
 * Removes ANSI escape codes from a string.
 * @param str - The string to strip ANSI codes from
 * @returns The string without ANSI codes
 * @example
 * stripAnsi('\u001b[31mRed text\u001b[0m') // 'Red text'
 * stripAnsi('\u001b[1mBold\u001b[0m text') // 'Bold text'
 */

export function stripAnsi(str: string): string {
  if (!str) return str;
  // eslint-disable-next-line no-control-regex
  return str.replace(/\u001b\[[0-9;]*m/g, '');
}
