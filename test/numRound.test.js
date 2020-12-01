import numRound from '../src/functions/numRound';

test('Round 10.123 to 2 decimals', () => {
  expect(numRound(10.123, 2)).toBe(10.12);
});

test('Round 10.123 to 1 decimals', () => {
  expect(numRound(10.123, 1)).toBe(10.1);
});

test('Round 0.03 to 3 decimals', () => {
  expect(numRound(0.03, 3)).toBe(0.03);
});

test('Round 0.03 to 1 decimals', () => {
  expect(numRound(0.03, 1)).toBe(0);
});

test('Round -0.03 to 1 decimals', () => {
  expect(numRound(-0.03, 1)).toBe(0);
});

test('Round -0.99 to 1 decimals', () => {
  expect(numRound(-0.99, 1)).toBe(-1);
});
