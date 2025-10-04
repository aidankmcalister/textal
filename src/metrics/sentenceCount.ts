/**
 * Counts the number of sentences in a string.
 * Uses a simple heuristic based on sentence-ending punctuation (. ! ?).
 * @param str - The string to count sentences in
 * @returns The number of sentences
 * @example
 * sentenceCount('Hello world.') // 1
 * sentenceCount('Hello! How are you?') // 2
 * sentenceCount('First. Second! Third?') // 3
 */

export function sentenceCount(str: string): number {
  if (!str) return 0;
  const matches = str.match(/[.!?]+/g);
  return matches ? matches.length : 0;
}
