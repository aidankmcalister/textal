/**
 * Counts grapheme clusters (user-perceived characters) in a string.
 * Uses Intl.Segmenter if available, otherwise falls back to code point counting.
 * @param str - The string to count graphemes in
 * @returns The number of graphemes
 * @example
 * graphemeCount('hello') // 5
 * graphemeCount('café') // 4
 * graphemeCount('👨‍👩‍👧‍👦') // 1 (family emoji is one grapheme)
 */

export function graphemeCount(str: string): number {
  if (!str) return 0;

  // Use Intl.Segmenter if available (better accuracy)
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str)).length;
  }

  // Fallback: count code points (approximate)
  return Array.from(str).length;
}
