import PRECISION from './PRECISION';
import { segmentLength } from '../src/';

test('Calculate the length of a segment', () => {
  expect(
    segmentLength([
      { x: 0, y: 0 },
      { x: 10, y: 0 },
    ]),
  ).toBeCloseTo(10, PRECISION);
});

test('Calculate the length of a segment', () => {
  expect(
    segmentLength([
      { x: 1, y: 1 },
      { x: 10, y: 10 },
    ]),
  ).toBeCloseTo(9 * Math.sqrt(2), PRECISION);
});
