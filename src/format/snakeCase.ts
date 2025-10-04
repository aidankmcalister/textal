/**
 * Converts a string to snake_case.
 * @param str - The string to convert
 * @returns The snake_cased string
 * @example
 * snakeCase('hello world') // 'hello_world'
 * snakeCase('Hello World') // 'hello_world'
 * snakeCase('helloWorld') // 'hello_world'
 * snakeCase('hello-world') // 'hello_world'
 */

export function snakeCase(str: string): string {
  if (!str) return str;
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}
