/**
 * Copies a string to the clipboard.
 * @param str - The string to copy
 * @returns A promise that resolves to the string that was copied, or rejects with an error
 * @example
 * await copy('hello world') // 'hello world'
 * @throws {Error} If the Clipboard API is not available or if the copy operation fails
 */

export async function copy(str: string): Promise<string> {
    if (!navigator?.clipboard?.writeText) {
        throw new Error('Clipboard API not available');
    }
    await navigator.clipboard.writeText(str);
    return str;
}