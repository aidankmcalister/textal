/**
 * Unescapes HTML entities in a string.
 * @param str - The string to unescape
 * @returns The string with HTML entities unescaped
 * @example
 * unescapeHtml('&lt;div&gt;hello&lt;/div&gt;') // '<div>hello</div>'
 * unescapeHtml('a &amp; b') // 'a & b'
 * unescapeHtml('&quot;hello&quot;') // '"hello"'
 */

export function unescapeHtml(str: string): string {
  if (!str) return str;
  const htmlUnescapes: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'"
  };
  return str.replace(
    /&(?:amp|lt|gt|quot|#39|apos);/g,
    (match) => htmlUnescapes[match]
  );
}
