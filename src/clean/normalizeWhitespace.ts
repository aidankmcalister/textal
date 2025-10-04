/**
 * Normalizes whitespace by collapsing spaces, tabs, and newlines into single spaces.
 * @param str - The string to normalize
 * @param opts - Normalization options
 * @param opts.collapse - Collapse consecutive whitespace (default: true)
 * @param opts.trim - Trim leading and trailing whitespace (default: true)
 * @param opts.collapseNewlines - Collapse newlines specifically (default: true, collapses with all whitespace)
 * @returns The string with normalized whitespace
 * @example
 * normalizeWhitespace('hello   world') // 'hello world'
 * normalizeWhitespace('hello\n\nworld') // 'hello world'
 * normalizeWhitespace('  hello  ', { trim: false }) // '  hello  ' (with collapsed spaces)
 * normalizeWhitespace('hello\n\nworld', { collapse: false, collapseNewlines: true }) // 'hello\nworld'
 */

export interface NormalizeWhitespaceOptions {
  collapse?: boolean;
  trim?: boolean;
  collapseNewlines?: boolean;
}

export function normalizeWhitespace(str: string, opts: NormalizeWhitespaceOptions = {}): string {
  if (!str) return str;

  const { collapse = true, trim = true, collapseNewlines = true } = opts;

  let result = str;

  if (collapse && collapseNewlines) {
    // Collapse all whitespace including newlines
    result = result.replace(/\s+/g, ' ');
  } else if (collapse && !collapseNewlines) {
    // Collapse spaces and tabs, but preserve newlines
    result = result.replace(/[ \t]+/g, ' ');
  } else if (!collapse && collapseNewlines) {
    // Only collapse newlines
    result = result.replace(/\n+/g, '\n');
  }

  if (trim) {
    result = result.trim();
  }

  return result;
}
