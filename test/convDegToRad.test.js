import PRECISION from './PRECISION';
import convDegToRad from '@/functions/convDegToRad';

test('Convert 90 Deg. to radians', () => {
  expect(convDegToRad(90)).toBe(Math.PI / 2);
});

test('Convert 30 Deg. to radians', () => {
  expect(convDegToRad(30)).toBe(Math.PI / 6);
});

test('Convert 43 Deg. to radians', () => {
  expect(convDegToRad(43)).toBeCloseTo(0.750492, PRECISION);
});
