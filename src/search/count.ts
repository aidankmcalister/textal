/**
 * Counts the number of occurrences of a term in a string.
 * @param str - The string to search in
 * @param term - The term to count
 * @param opts - Options for the search
 * @returns The number of occurrences
 * @example
 * count('hello hello world', 'hello') // 2
 * count('hello HELLO world', 'hello') // 2
 * count('hello HELLO world', 'hello', { caseSensitive: true }) // 1
 */

export function count(
  str: string,
  term: string,
  opts?: { caseSensitive?: boolean }
): number {
  if (!str || !term) return 0;

  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const flags = opts?.caseSensitive ? 'g' : 'gi';
  const regex = new RegExp(escapedTerm, flags);

  let count = 0;
  let match: RegExpExecArray | null;

  // Manual loop to catch overlapping matches
  while ((match = regex.exec(str)) !== null) {
    count++;
    // Move back one character to catch overlapping matches
    regex.lastIndex = match.index + 1;
  }

  return count;
}
