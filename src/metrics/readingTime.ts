import { wordCount } from './wordCount';

/**
 * Calculates the estimated reading time for a text.
 * @param str - The text to analyze
 * @param wpm - Words per minute (default: 200)
 * @returns Object with minutes, seconds, and word count
 * @example
 * readingTime('hello world') // { minutes: 0, seconds: 0, words: 2 }
 * readingTime('hello '.repeat(100)) // { minutes: 0, seconds: 30, words: 100 }
 * readingTime('hello '.repeat(200)) // { minutes: 1, seconds: 0, words: 200 }
 */

export function readingTime(
  str: string,
  wpm: number = 200
): { minutes: number; seconds: number; words: number } {
  if (!str || !str.trim()) {
    return { minutes: 0, seconds: 0, words: 0 };
  }

  const words = wordCount(str);
  const totalMinutes = words / wpm;
  const minutes = Math.floor(totalMinutes);
  const seconds = Math.round((totalMinutes - minutes) * 60);

  return { minutes, seconds, words };
}
