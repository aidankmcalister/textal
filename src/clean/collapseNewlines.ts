/**
 * Collapses consecutive newlines to a maximum number.
 * @param str - The string to collapse newlines in
 * @param max - Maximum consecutive newlines (default: 1)
 * @returns The string with collapsed newlines
 * @example
 * collapseNewlines('hello\n\n\nworld') // 'hello\nworld'
 * collapseNewlines('a\n\n\n\nb', 2) // 'a\n\nb'
 */

export function collapseNewlines(str: string, max: number = 1): string {
  if (!str) return str;
  const pattern = new RegExp(`\n{${max + 1},}`, 'g');
  return str.replace(pattern, '\n'.repeat(max));
}
