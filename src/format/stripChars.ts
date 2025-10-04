/**
 * Removes specified characters from a string.
 * @param str - The string to strip characters from
 * @param chars - The characters to remove (default: whitespace)
 * @returns The string with specified characters removed
 * @example
 * stripChars('  hello world  ') // 'helloworld'
 * stripChars('hello-world-', '-') // 'helloworld'
 * stripChars('a1b2c3', '123') // 'abc'
 */

export function stripChars(str: string, chars: string = ' \t\n\r'): string {
  if (!str) return str;
  const regex = new RegExp(`[${chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}]`, 'g');
  return str.replace(regex, '');
}
