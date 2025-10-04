/**
 * Converts URLs in text to clickable anchor tags with escaped text.
 * @param str - The text to linkify
 * @param opts - Options for link attributes
 * @returns HTML string with URLs converted to links
 * @example
 * linkify('Visit https://example.com') // 'Visit <a href="https://example.com">https://example.com</a>'
 * linkify('Check www.example.com') // 'Check <a href="https://www.example.com">www.example.com</a>'
 * linkify('Go to http://test.com', { target: '_blank', rel: 'noopener' }) // 'Go to <a href="http://test.com" target="_blank" rel="noopener">http://test.com</a>'
 */

export function linkify(
  str: string,
  opts?: { target?: '_blank' | '_self'; rel?: string; className?: string }
): string {
  if (!str) return '';

  // Escape HTML entities except for URLs
  // Stop at whitespace or angle brackets to avoid capturing HTML tags
  const urlRegex = /(https?:\/\/[^\s<>]+|www\.[^\s<>]+)/gi;

  // Split by URLs to handle escaping properly
  const parts: string[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const regex = new RegExp(urlRegex);

  while ((match = regex.exec(str)) !== null) {
    // Escape text before URL
    if (match.index > lastIndex) {
      const textBefore = str.slice(lastIndex, match.index);
      parts.push(
        textBefore
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
      );
    }

    let url = match[0];
    let href = url;

    // Add https:// prefix for www. URLs
    if (url.startsWith('www.')) {
      href = 'https://' + url;
    }

    // Build attributes
    const targetAttr = opts?.target ? ` target="${opts.target}"` : '';
    const relAttr = opts?.rel ? ` rel="${opts.rel}"` : '';
    const classAttr = opts?.className ? ` class="${opts.className}"` : '';

    parts.push(`<a href="${href}"${targetAttr}${relAttr}${classAttr}>${url}</a>`);
    lastIndex = regex.lastIndex;
  }

  // Escape remaining text after last URL
  if (lastIndex < str.length) {
    const textAfter = str.slice(lastIndex);
    parts.push(
      textAfter
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
    );
  }

  return parts.join('');
}
