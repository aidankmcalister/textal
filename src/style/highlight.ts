import { escapeHtml } from '../clean/escapeHtml';
import { escapeRegex } from '../utils/escapeRegex';

/**
 * Highlights occurrences of a term in a string with HTML span tags.
 * @param str - The text to highlight in
 * @param term - The term to highlight
 * @param className - CSS class for the highlight span (default: 'bg-yellow-200 text-black')
 * @param opts - Options for matching
 * @returns HTML string with highlighted terms
 * @example
 * highlight('hello world', 'world') // 'hello <span class="bg-yellow-200 text-black">world</span>'
 * highlight('hello HELLO', 'hello') // '<span class="bg-yellow-200 text-black">hello</span> <span class="bg-yellow-200 text-black">HELLO</span>'
 * highlight('hello world', 'hello', 'highlight', { caseSensitive: true }) // '<span class="highlight">hello</span> world'
 */

export function highlight(
  str: string,
  term: string,
  className: string = 'bg-yellow-200 text-black',
  opts?: { caseSensitive?: boolean; wholeWord?: boolean }
): string {
  if (!str || !term) return str;

  const escaped = escapeHtml(str);
  const escapedTerm = escapeRegex(term);

  let pattern = escapedTerm;
  if (opts?.wholeWord) {
    pattern = `\\b${pattern}\\b`;
  }

  const flags = opts?.caseSensitive ? 'g' : 'gi';
  const regex = new RegExp(pattern, flags);

  return escaped.replace(
    regex,
    (match) => `<span class="${className}">${match}</span>`
  );
}
