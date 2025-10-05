import { describe, it, expect } from 'vitest';
import { parseDate } from '../../src/dates/parseDate';

describe('parseDate', () => {
  it('should parse ISO date strings', () => {
    const date = parseDate('2024-01-15T12:00:00');
    expect(date).toBeInstanceOf(Date);
    expect(date.getFullYear()).toBe(2024);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(15);
  });

  it('should parse ISO datetime strings', () => {
    const date = parseDate('2024-01-15T14:30:45');
    expect(date).toBeInstanceOf(Date);
    expect(date.getHours()).toBe(14);
    expect(date.getMinutes()).toBe(30);
    expect(date.getSeconds()).toBe(45);
  });

  it('should parse various date formats', () => {
    expect(parseDate('January 15, 2024')).toBeInstanceOf(Date);
    expect(parseDate('01/15/2024')).toBeInstanceOf(Date);
    expect(parseDate('2024-01-15T14:30:45.123Z')).toBeInstanceOf(Date);
  });

  it('should throw error for invalid date strings', () => {
    expect(() => parseDate('invalid')).toThrow('Invalid date string');
    expect(() => parseDate('not a date')).toThrow('Invalid date string');
    expect(() => parseDate('')).toThrow('Invalid date string');
  });

  it('should throw error for empty strings', () => {
    expect(() => parseDate('')).toThrow('Invalid date string');
    expect(() => parseDate('   ')).toThrow('Invalid date string');
  });

  it('should throw error for non-string inputs', () => {
    expect(() => parseDate(null as any)).toThrow('Invalid date string');
    expect(() => parseDate(undefined as any)).toThrow('Invalid date string');
    expect(() => parseDate(123 as any)).toThrow('Invalid date string');
  });
});
