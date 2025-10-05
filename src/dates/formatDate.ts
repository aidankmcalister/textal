/**
 * Format Date object into string using date-fns style format tokens
 * @param date - The Date object to format
 * @param format - The format string with tokens (default: 'yyyy-MM-dd')
 * @returns The formatted date string
 * @throws {Error} If date is not a valid Date object
 * @example
 * formatDate(new Date('2024-01-15 14:30:45'), 'yyyy-MM-dd') // '2024-01-15'
 * formatDate(new Date('2024-01-15 14:30:45'), 'MMMM d, yyyy') // 'January 15, 2024'
 * formatDate(new Date('2024-01-15 14:30:45'), 'h:mm A') // '2:30 PM'
 * formatDate(new Date('2024-01-15 14:30:45'), 'EEEE, MMMM d') // 'Monday, January 15'
 * formatDate(new Date('2024-01-15 14:30:45.123'), 'HH:mm:ss.SSS') // '14:30:45.123'
 *
 * Supported tokens:
 * - yyyy: 4-digit year (e.g., 2024)
 * - yy: 2-digit year (e.g., 24)
 * - MMMM: Full month name (e.g., January)
 * - MMM: Short month name (e.g., Jan)
 * - MM: 2-digit month (01-12)
 * - M: Month (1-12)
 * - dd: 2-digit day (01-31)
 * - d: Day (1-31)
 * - EEEE: Full day name (e.g., Monday)
 * - EEE: Short day name (e.g., Mon)
 * - HH: 2-digit 24-hour (00-23)
 * - H: 24-hour (0-23)
 * - hh: 2-digit 12-hour (01-12)
 * - h: 12-hour (1-12)
 * - mm: 2-digit minutes (00-59)
 * - m: Minutes (0-59)
 * - ss: 2-digit seconds (00-59)
 * - s: Seconds (0-59)
 * - SSS: Milliseconds (000-999)
 * - a: am/pm (lowercase)
 * - aa: am/pm (lowercase)
 * - A: AM/PM (uppercase)
 * - AA: AM/PM (uppercase)
 */
export function formatDate(date: Date, format: string = 'yyyy-MM-dd'): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date object');
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthNamesShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const dayNames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  const dayNamesShort = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
  ];

  const pad = (num: number, size: number = 2): string => {
    return num.toString().padStart(size, '0');
  };

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const ampm = hours24 >= 12 ? 'PM' : 'AM';

  const tokens: Record<string, string> = {
    'yyyy': year.toString(),
    'yy': year.toString().slice(-2),
    'MMMM': monthNames[month],
    'MMM': monthNamesShort[month],
    'MM': pad(month + 1),
    'M': (month + 1).toString(),
    'dd': pad(day),
    'd': day.toString(),
    'EEEE': dayNames[dayOfWeek],
    'EEE': dayNamesShort[dayOfWeek],
    'HH': pad(hours24),
    'H': hours24.toString(),
    'hh': pad(hours12),
    'h': hours12.toString(),
    'mm': pad(minutes),
    'm': minutes.toString(),
    'ss': pad(seconds),
    's': seconds.toString(),
    'SSS': pad(milliseconds, 3),
    'AA': ampm,
    'A': ampm,
    'aa': ampm.toLowerCase(),
    'a': ampm.toLowerCase()
  };

  // Replace tokens using placeholders to avoid conflicts
  // Sort by length (longest first) to match longer tokens before shorter ones
  const sortedTokens = Object.keys(tokens).sort((a, b) => b.length - a.length);

  let result = format;
  const placeholders: Record<string, string> = {};

  // First pass: replace tokens with unique placeholders
  for (let i = 0; i < sortedTokens.length; i++) {
    const token = sortedTokens[i];
    const placeholder = `\x00${i}\x00`;
    placeholders[placeholder] = tokens[token];
    result = result.split(token).join(placeholder);
  }

  // Second pass: replace placeholders with actual values
  for (const placeholder in placeholders) {
    result = result.split(placeholder).join(placeholders[placeholder]);
  }

  return result;
}
