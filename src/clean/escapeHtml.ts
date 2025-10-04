/**
 * Escapes HTML special characters in a string.
 * @param str - The string to escape
 * @returns The string with HTML characters escaped
 * @example
 * escapeHtml('<div>hello</div>') // '&lt;div&gt;hello&lt;/div&gt;'
 * escapeHtml('a & b') // 'a &amp; b'
 * escapeHtml('"hello"') // '&quot;hello&quot;'
 */

export function escapeHtml(str: string): string {
  if (!str) return str;
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return str.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
}
