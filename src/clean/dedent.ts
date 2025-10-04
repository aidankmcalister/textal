/**
 * Removes common leading indentation from all lines.
 * @param str - The string to dedent
 * @returns The dedented string
 * @example
 * dedent('  hello\n  world') // 'hello\nworld'
 * dedent('    line1\n      line2\n    line3') // 'line1\n  line2\nline3'
 */

export function dedent(str: string): string {
  if (!str) return str;

  const lines = str.split('\n');

  // Find minimum indentation (ignoring empty lines)
  const minIndent = lines.reduce((min, line) => {
    if (line.trim().length === 0) return min;
    const indent = line.match(/^(\s*)/)?.[1].length || 0;
    return min === null ? indent : Math.min(min, indent);
  }, null as number | null);

  if (minIndent === null || minIndent === 0) {
    return str;
  }

  // Remove minimum indentation from all lines
  return lines.map(line => {
    if (line.trim().length === 0) return line;
    return line.slice(minIndent);
  }).join('\n');
}
