# Textal

[![npm version](https://img.shields.io/npm/v/textal.svg)](https://www.npmjs.com/package/textal)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/textal)](https://bundlephobia.com/package/textal)

Lightweight text utilities for JavaScript/TypeScript. Format, clean, search, and style text with zero dependencies.

## Features

- **Tiny** - Lightweight with zero dependencies
- **Tree-shakeable** - Import only what you need
- **Type-safe** - Full TypeScript support with complete type definitions

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
- `pascalCase(str: string): string` - Convert to PascalCase
- `kebabCase(str: string): string` - Convert to kebab-case
- `snakeCase(str: string): string` - Convert to snake_case
- `constantCase(str: string): string` - Convert to CONSTANT_CASE
- `sentenceCase(str: string): string` - Convert to Sentence case
- `noCase(str: string): string` - Convert to space-delimited lowercase
- `slugify(str: string, opts?: { lower?: boolean, separator?: string }): string` - Convert to URL-friendly slug
- `truncate(str: string, length: number, end?: string): string` - Truncate string by character count
- `truncateWords(str: string, count: number, end?: string): string` - Truncate string by word count
- `pad(str: string, length: number, options?: { side?: 'start' | 'end' | 'both', fillChar?: string }): string` - Pad string on specified side
- `stripChars(str: string, chars?: string): string` - Remove specified characters

### Cleaning

- `stripHtml(str: string): string` - Remove HTML tags
- `escapeHtml(str: string): string` - Escape HTML entities
- `unescapeHtml(str: string): string` - Unescape HTML entities
- `normalizeWhitespace(str: string, opts?: { collapse?: boolean, trim?: boolean, collapseNewlines?: boolean }): string` - Normalize whitespace with options
- `removePunctuation(str: string): string` - Remove punctuation
- `onlyAlpha(str: string): string` - Keep only alphabetic characters
- `onlyNumeric(str: string): string` - Keep only numeric characters
- `toAscii(str: string): string` - Convert to ASCII (remove diacritics)
- `filterChars(str: string, opts: { alpha?: boolean, numeric?: boolean, spaces?: boolean, punctuation?: boolean, extras?: RegExp }): string` - Filter characters based on criteria
- `stripAnsi(str: string): string` - Remove ANSI escape codes
- `dedent(str: string): string` - Remove common leading indentation
- `collapseNewlines(str: string, max?: number): string` - Collapse consecutive newlines
- `trimLines(str: string): string` - Trim whitespace from each line

### Searching

- `contains(str: string, term: string, opts?: { caseSensitive?: boolean }): boolean` - Check if string contains term
- `count(str: string, term: string, opts?: { caseSensitive?: boolean }): number` - Count term occurrences
- `extract(str: string, pattern: RegExp): string[]` - Extract all regex matches
- `between(str: string, start: string, end: string): string` - Extract text between delimiters (first match)
- `betweenAll(str: string, start: string, end: string): string[]` - Extract all text between delimiters
- `startsWith(str: string, term: string, opts?: { caseSensitive?: boolean }): boolean` - Check if string starts with term
- `endsWith(str: string, term: string, opts?: { caseSensitive?: boolean }): boolean` - Check if string ends with term
- `indexOfAll(str: string, term: string, opts?: { caseSensitive?: boolean }): number[]` - Find all positions of term
- `nthIndexOf(str: string, term: string, n: number, opts?: { caseSensitive?: boolean }): number` - Find nth occurrence position

### Styling

- `wrap(str: string, tag?: string, className?: string): string` - Wrap text in HTML tag
- `highlight(str: string, term: string, className?: string, opts?: { caseSensitive?: boolean, wholeWord?: boolean }): string` - Highlight search terms
- `linkify(str: string, opts?: { target?: '_blank' | '_self', rel?: string, className?: string }): string` - Convert URLs to links
- `nl2br(str: string): string` - Convert newlines to HTML `<br>` tags

### Metrics

- `wordCount(str: string): number` - Count words
- `charCount(str: string, opts?: { excludeSpaces?: boolean }): number` - Count characters
- `readingTime(str: string, wpm?: number): { minutes: number, seconds: number, words: number }` - Estimate reading time
- `lineCount(str: string): number` - Count lines
- `sentenceCount(str: string): number` - Count sentences
- `byteLength(str: string): number` - Get byte length in UTF-8
- `graphemeCount(str: string): number` - Count grapheme clusters (user-perceived characters)

### Utilities

- `copy(str: string): Promise<string>` - Copy text to clipboard
- `escapeRegex(str: string): string` - Escape special regex characters for use in RegExp
- `tokenizeWords(str: string): string[]` - Split string into word tokens
- `splitLines(str: string): string[]` - Split string into lines
- `joinLines(lines: string[]): string` - Join lines into string
- `uniqueLines(str: string): string` - Remove duplicate lines

### Date

- `parseDate(str: string): Date` - Parse string into Date object
- `formatDate(date: Date, format?: string): string` - Format Date object using a format string (e.g. "yyyy-MM-dd")

#### Format Tokens

| Token | Output | Description |
|-------|--------|-------------|
| `yyyy` | 2024 | 4-digit year |
| `yy` | 24 | 2-digit year |
| `MMMM` | January | Full month name |
| `MMM` | Jan | Short month name |
| `MM` | 01-12 | 2-digit month |
| `M` | 1-12 | Month |
| `dd` | 01-31 | 2-digit day |
| `d` | 1-31 | Day |
| `EEEE` | Monday | Full day name |
| `EEE` | Mon | Short day name |
| `HH` | 00-23 | 2-digit 24-hour |
| `H` | 0-23 | 24-hour |
| `hh` | 01-12 | 2-digit 12-hour |
| `h` | 1-12 | 12-hour |
| `mm` | 00-59 | 2-digit minutes |
| `m` | 0-59 | Minutes |
| `ss` | 00-59 | 2-digit seconds |
| `s` | 0-59 | Seconds |
| `SSS` | 000-999 | Milliseconds |
| `A` / `AA` | AM/PM | Uppercase AM/PM |
| `a` / `aa` | am/pm | Lowercase am/pm |


## Examples

### Formatting Text

```javascript
import { camelCase, kebabCase, snakeCase, titleCase } from 'textal';

console.log(camelCase('hello-world')); // "helloWorld"
console.log(kebabCase('helloWorld')); // "hello-world"
console.log(snakeCase('helloWorld')); // "hello_world"
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
const linked = linkify(message, {
  target: '_blank',
  rel: 'noopener noreferrer',
  className: 'text-blue-500'
});
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

### Working with Dates

```javascript
import { parseDate, formatDate } from 'textal';

// Parse date strings
const date = parseDate('2024-01-15T14:30:45');

// Format dates with various patterns
console.log(formatDate(date, 'yyyy-MM-dd'));           // '2024-01-15'
console.log(formatDate(date, 'MMMM d, yyyy'));         // 'January 15, 2024'
console.log(formatDate(date, 'EEEE, MMM d'));          // 'Monday, Jan 15'
console.log(formatDate(date, 'h:mm A'));               // '2:30 PM'
console.log(formatDate(date, 'HH:mm:ss'));             // '14:30:45'
console.log(formatDate(date, 'MM/dd/yy'));             // '01/15/24'
```

## Browser Support

Textal works in all modern browsers and Node.js 16+. For older environments, you may need to include polyfills for:

- `String.prototype.normalize` (for `toAscii`)
- `Object.fromEntries` (for some utility functions)

## License

MIT © [Aidan McAlister](https://github.com/aidankmcalister)

## Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) to get started.
