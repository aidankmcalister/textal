import { describe, it, expect } from 'vitest';
import { formatDate } from '../../src/dates/formatDate';

describe('formatDate', () => {
  const testDate = new Date('2024-01-15T14:30:45.123');

  describe('year formatting', () => {
    it('should format 4-digit year', () => {
      expect(formatDate(testDate, 'yyyy')).toBe('2024');
    });

    it('should format 2-digit year', () => {
      expect(formatDate(testDate, 'yy')).toBe('24');
    });
  });

  describe('month formatting', () => {
    it('should format full month name', () => {
      expect(formatDate(testDate, 'MMMM')).toBe('January');
    });

    it('should format short month name', () => {
      expect(formatDate(testDate, 'MMM')).toBe('Jan');
    });

    it('should format 2-digit month', () => {
      expect(formatDate(testDate, 'MM')).toBe('01');
    });

    it('should format 1-digit month', () => {
      expect(formatDate(testDate, 'M')).toBe('1');
    });
  });

  describe('day formatting', () => {
    it('should format 2-digit day', () => {
      expect(formatDate(testDate, 'dd')).toBe('15');
    });

    it('should format 1-digit day', () => {
      expect(formatDate(testDate, 'd')).toBe('15');
      expect(formatDate(new Date('2024-01-05T12:00:00'), 'd')).toBe('5');
    });

    it('should format full day name', () => {
      expect(formatDate(testDate, 'EEEE')).toBe('Monday');
    });

    it('should format short day name', () => {
      expect(formatDate(testDate, 'EEE')).toBe('Mon');
    });
  });

  describe('time formatting', () => {
    it('should format 24-hour time', () => {
      expect(formatDate(testDate, 'HH')).toBe('14');
      expect(formatDate(testDate, 'H')).toBe('14');
    });

    it('should format 12-hour time', () => {
      expect(formatDate(testDate, 'hh')).toBe('02');
      expect(formatDate(testDate, 'h')).toBe('2');
    });

    it('should format minutes', () => {
      expect(formatDate(testDate, 'mm')).toBe('30');
      expect(formatDate(testDate, 'm')).toBe('30');
    });

    it('should format seconds', () => {
      expect(formatDate(testDate, 'ss')).toBe('45');
      expect(formatDate(testDate, 's')).toBe('45');
    });

    it('should format milliseconds', () => {
      expect(formatDate(testDate, 'SSS')).toBe('123');
    });

    it('should format AM/PM', () => {
      expect(formatDate(testDate, 'A')).toBe('PM');
      expect(formatDate(testDate, 'AA')).toBe('PM');
      expect(formatDate(testDate, 'a')).toBe('pm');
      expect(formatDate(testDate, 'aa')).toBe('pm');

      const morning = new Date('2024-01-15T09:30:45');
      expect(formatDate(morning, 'A')).toBe('AM');
      expect(formatDate(morning, 'a')).toBe('am');
    });
  });

  describe('common format patterns', () => {
    it('should format ISO date', () => {
      expect(formatDate(testDate, 'yyyy-MM-dd')).toBe('2024-01-15');
    });

    it('should format US date', () => {
      expect(formatDate(testDate, 'MM/dd/yyyy')).toBe('01/15/2024');
    });

    it('should format readable date', () => {
      expect(formatDate(testDate, 'MMMM d, yyyy')).toBe('January 15, 2024');
    });

    it('should format full datetime', () => {
      expect(formatDate(testDate, 'yyyy-MM-dd HH:mm:ss')).toBe('2024-01-15 14:30:45');
    });

    it('should format 12-hour time with AM/PM', () => {
      expect(formatDate(testDate, 'h:mm A')).toBe('2:30 PM');
    });

    it('should format with day name', () => {
      expect(formatDate(testDate, 'EEEE, MMMM d, yyyy')).toBe('Monday, January 15, 2024');
    });

    it('should format with milliseconds', () => {
      expect(formatDate(testDate, 'HH:mm:ss.SSS')).toBe('14:30:45.123');
    });
  });

  describe('default format', () => {
    it('should use yyyy-MM-dd as default', () => {
      expect(formatDate(testDate)).toBe('2024-01-15');
    });
  });

  describe('error handling', () => {
    it('should throw error for invalid date', () => {
      expect(() => formatDate(new Date('invalid'))).toThrow('Invalid date object');
      expect(() => formatDate(null as any)).toThrow('Invalid date object');
      expect(() => formatDate(undefined as any)).toThrow('Invalid date object');
    });
  });

  describe('edge cases', () => {
    it('should handle midnight correctly', () => {
      const midnight = new Date('2024-01-15T00:00:00');
      expect(formatDate(midnight, 'HH:mm')).toBe('00:00');
      expect(formatDate(midnight, 'h:mm A')).toBe('12:00 AM');
    });

    it('should handle noon correctly', () => {
      const noon = new Date('2024-01-15T12:00:00');
      expect(formatDate(noon, 'HH:mm')).toBe('12:00');
      expect(formatDate(noon, 'h:mm A')).toBe('12:00 PM');
    });

    it('should pad single digit values', () => {
      const date = new Date('2024-01-05T09:05:05');
      expect(formatDate(date, 'MM/dd/yyyy HH:mm:ss')).toBe('01/05/2024 09:05:05');
    });
  });
});
