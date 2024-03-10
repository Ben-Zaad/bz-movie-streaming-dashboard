import { formatTimeDuration } from './string-utils';

describe('formatTimeDuration', () => {
  it('should format time duration with hours and minutes', () => {
    expect(formatTimeDuration('2h1m')).toBe(
      '2 hours 1 minutes'
    );
    expect(formatTimeDuration('1h1m')).toBe(
      '1 hours 1 minutes'
    );
    expect(formatTimeDuration('2h0m')).toBe(
      '2 hours 0 minutes'
    );
    expect(formatTimeDuration('1h')).toBe('1 hours');
    expect(formatTimeDuration('0h10m')).toBe(
      '0 hours 10 minutes'
    );
    expect(formatTimeDuration('10m')).toBe('10 minutes');
    expect(formatTimeDuration('TEST')).toBe('');
    expect(formatTimeDuration('')).toBe('');
  });
});
