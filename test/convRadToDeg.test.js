import PRECISION from './PRECISION';
import convRadToDeg from '@/functions/convRadToDeg';

test('Convert 3.14 radians to degrees', () => {
  expect(convRadToDeg(Math.PI)).toBe(180);
});

test('Convert 1.07 radians to degrees', () => {
  expect(convRadToDeg(Math.PI * 0.5)).toBe(90);
});

test('Convert 2.094395 radians to degrees', () => {
  expect(convRadToDeg(2.094395)).toBeCloseTo(120, PRECISION);
});
