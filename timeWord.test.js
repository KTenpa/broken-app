const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('handles midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('handles 00:12', () => {
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });

  test('handles 01:00', () => {
    expect(timeWord('01:00')).toBe("one o'clock am");
  });

  test('handles 06:01', () => {
    expect(timeWord('06:01')).toBe('six oh one am');
  });

  test('handles 06:10', () => {
    expect(timeWord('06:10')).toBe('six ten am');
  });

  test('handles 06:18', () => {
    expect(timeWord('06:18')).toBe('six eighteen am');
  });

  test('handles 06:30', () => {
    expect(timeWord('06:30')).toBe('six thirty am');
  });

  test('handles 10:34', () => {
    expect(timeWord('10:34')).toBe('ten thirty four am');
  });

  test('handles noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('handles 12:09', () => {
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
  });

  test('handles 23:23', () => {
    expect(timeWord('23:23')).toBe('eleven twenty three pm');
  });
});