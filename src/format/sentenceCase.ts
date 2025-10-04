/**
 * Converts a string to sentence case (capitalizes first letter of each sentence).
 * @param str - The string to convert
 * @returns The sentence cased string
 * @example
 * sentenceCase('hello world') // 'Hello world'
 * sentenceCase('hello. world! how are you?') // 'Hello. World! How are you?'
 */

export function sentenceCase(str: string): string {
  if (!str) return str;
  return str
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());
}
