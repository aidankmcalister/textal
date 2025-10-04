/**
 * Converts a string to camelCase.
 * @param str - The string to convert
 * @returns The camelCased string
 * @example
 * camelCase('hello world') // 'helloWorld'
 * camelCase('Hello World') // 'helloWorld'
 * camelCase('hello-world') // 'helloWorld'
 * camelCase('hello_world') // 'helloWorld'
 */

export function camelCase(str: string): string {
  if (!str) return str;
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^[A-Z]/, char => char.toLowerCase());
}
