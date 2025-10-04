/**
 * Wraps text in an HTML tag with escaped inner text.
 * @param str - The text to wrap
 * @param tag - The HTML tag to use (default: 'span')
 * @param className - Optional CSS class name
 * @returns HTML string with wrapped and escaped text
 * @example
 * wrap('hello', 'div') // '<div>hello</div>'
 * wrap('hello', 'span', 'text-bold') // '<span class="text-bold">hello</span>'
 * wrap('<script>alert()</script>', 'p') // '<p>&lt;script&gt;alert()&lt;/script&gt;</p>'
 */

export function wrap(str: string, tag: string = 'span', className: string = ''): string {
  if (!str) return '';

  // Escape HTML entities
  const escaped = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const classAttr = className ? ` class="${className}"` : '';
  return `<${tag}${classAttr}>${escaped}</${tag}>`;
}
