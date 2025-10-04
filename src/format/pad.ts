/**
 * Pads a string with a specified character to reach a target length.
 * @param str - The string to pad
 * @param length - The target length
 * @param options - Padding options
 * @param options.side - The side to pad ('start', 'end', or 'both'). Default: 'end'
 * @param options.fillChar - The character to pad with (default: ' ')
 * @returns The padded string
 * @example
 * pad('hello', 10) // 'hello     '
 * pad('hello', 10, { fillChar: '0' }) // 'hello00000'
 * pad('hello', 10, { side: 'start' }) // '     hello'
 * pad('hello', 10, { side: 'both' }) // '  hello   '
 * pad('hello', 3) // 'hello' (no padding if length <= str.length)
 */

export function pad(
  str: string,
  length: number,
  options: { side?: 'start' | 'end' | 'both'; fillChar?: string } = {}
): string {
  if (!str) str = '';
  if (str.length >= length) return str;
  
  const { side = 'end', fillChar = ' ' } = options;
  const paddingLength = length - str.length;
  const padding = fillChar.repeat(Math.max(0, paddingLength));
  
  switch (side) {
    case 'start':
      return padding + str;
    case 'both': {
      const leftPadding = fillChar.repeat(Math.floor(paddingLength / 2));
      const rightPadding = fillChar.repeat(Math.ceil(paddingLength / 2));
      return leftPadding + str + rightPadding;
    }
    case 'end':
    default:
      return str + padding;
  }
}
