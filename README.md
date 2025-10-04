# Textal

[![npm version](https://img.shields.io/npm/v/textal.svg)](https://www.npmjs.com/package/textal)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/textal)](https://bundlephobia.com/package/textal)

A tiny, dependency-free text toolkit for formatting, cleaning, searching, and styling text in JavaScript/TypeScript. Built with simplicity, tree-shaking, and modern web development in mind.

## Features

- **Tiny**: Ultra lightweight with zero dependencies
- **Modular**: Import only what you need (fully tree-shakeable)
- **Type-Safe**: Written in TypeScript with full type definitions
- **Safe**: HTML escaping by default to prevent XSS

## Installation

```bash
# npm
npm install textal

# yarn
yarn add textal

# pnpm
pnpm add textal
```

## Quick Start

```javascript
import { titleCase, truncate, highlight, linkify } from 'textal';

// Formatting
console.log(titleCase('hello world')); // "Hello World"
console.log(truncate('This is a long text', 10)); // "This is a..."

// Styling
console.log(highlight('Error: something went wrong', 'Error', 'text-red-500'));
// <span class="text-red-500">Error</span>: something went wrong

console.log(linkify('Visit https://example.com'));
// Visit <a href="https://example.com">https://example.com</a>
```

## API Reference

### Formatting

- `capitalize(str: string): string` - Capitalize first letter
- `titleCase(str: string): string` - Convert to Title Case
- `camelCase(str: string): string` - Convert to camelCase
- `kebabCase(str: string): string` - Convert to kebab-case
- `snakeCase(str: string): string` - Convert to snake_case
- `truncate(str: string, length: number, end?: string): string` - Truncate string
- `pad(str: string, length: number, options?: { side?: 'start' | 'end' | 'both', fillChar?: string }): string` - Pad string on specified side
- `stripChars(str: string, chars: string): string` - Remove specified characters

### Cleaning

- `stripHtml(str: string): string` - Remove HTML tags
- `escapeHtml(str: string): string` - Escape HTML entities
- `unescapeHtml(str: string): string` - Unescape HTML entities
- `normalizeWhitespace(str: string): string` - Normalize whitespace
- `removePunctuation(str: string): string` - Remove punctuation
- `onlyAlpha(str: string): string` - Keep only alphabetic characters
- `onlyNumeric(str: string): string` - Keep only numeric characters
- `toAscii(str: string): string` - Convert to ASCII (remove diacritics)

### Searching

- `contains(str: string, term: string, opts?: { caseSensitive?: boolean }): boolean` - Check if string contains term
- `count(str: string, term: string, opts?: { caseSensitive?: boolean }): number` - Count term occurrences
- `extract(str: string, pattern: RegExp): string[]` - Extract all regex matches
- `between(str: string, start: string, end: string): string | null` - Extract text between delimiters

### Styling

- `wrap(str: string, tag?: string, className?: string): string` - Wrap text in HTML tag
- `highlight(str: string, term: string, className?: string, opts?: { caseSensitive?: boolean, wholeWord?: boolean }): string` - Highlight search terms
- `linkify(str: string, opts?: { target?: '_blank' | '_self', rel?: string, className?: string }): string` - Convert URLs to links

### Metrics

- `wordCount(str: string): number` - Count words
- `charCount(str: string, opts?: { excludeSpaces?: boolean }): number` - Count characters
- `readingTime(str: string, wpm?: number): { minutes: number, seconds: number, words: number }` - Estimate reading time

### Utilities

- `escapeRegex(str: string): string` - Escape special regex characters for use in RegExp

## Examples

### Formatting Text

```javascript
import { camelCase, kebabCase, snakeCase, titleCase } from 'textal';

console.log(camelCase('hello-world')); // "helloWorld"
console.log(kebabCase('helloWorld'));  // "hello-world"
console.log(snakeCase('helloWorld'));  // "hello_world"
console.log(titleCase('hello world')); // "Hello World"
```

### Cleaning Text

```javascript
import { stripHtml, toAscii, normalizeWhitespace } from 'textal';

console.log(stripHtml('<p>Hello <b>world</b>!</p>')); // "Hello world!"
console.log(toAscii('café')); // "cafe"
console.log(normalizeWhitespace('  Hello   world!  ')); // "Hello world!"
```

### Searching in Text

```javascript
import { contains, count, between } from 'textal';

console.log(contains('Hello world', 'WORLD')); // true (case-insensitive by default)
console.log(count('banana', 'ana')); // 2 (overlapping matches)
console.log(between('Hello [world]', '[', ']')); // "world"
```

### Styling Text

```javascript
import { highlight, linkify } from 'textal';

// Highlight search terms
const text = 'Error: Something went wrong';
const highlighted = highlight(text, 'error', 'text-red-500');
// <span class="text-red-500">Error</span>: Something went wrong

// Convert URLs to links
const message = 'Visit https://example.com for more info';
const linked = linkify(message, { target: '_blank', rel: 'noopener noreferrer', className: 'text-blue-500' });
// Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="text-blue-500">https://example.com</a> for more info
```

### Text Metrics

```javascript
import { wordCount, charCount, readingTime } from 'textal';

const text = 'This is a sample text.';

console.log(wordCount(text)); // 5
console.log(charCount(text)); // 22
console.log(readingTime(text, 200));
// { minutes: 0, seconds: 2, words: 5 }
```

## Browser Support

Textal works in all modern browsers and Node.js 16+. For older environments, you may need to include polyfills for:

- `String.prototype.normalize` (for `toAscii`)
- `Object.fromEntries` (for some utility functions)

## License

MIT © [Aidan McAlister](https://github.com/aidankmcalister)

## Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) to get started.