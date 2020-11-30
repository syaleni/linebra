import PRECISION from './PRECISION';
import { segmentLineIntersection } from '../src/';

test('Calculate the intersection of a segment and a line', () => {
  const s1 = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
  ];
  const l = { m: Infinity, c: 5 };
  const v = segmentLineIntersection(s1, l);
  expect(v.x).toBeCloseTo(5, PRECISION);
  expect(v.y).toBeCloseTo(0, PRECISION);
});

test('Calculate the intersection of a segment and a line', () => {
  const s1 = [
    { x: 0, y: 0 },
    { x: 10, y: 10 },
  ];
  const l = { m: 0, c: 5 };
  const v = segmentLineIntersection(s1, l);
  expect(v.x).toBeCloseTo(5, PRECISION);
  expect(v.y).toBeCloseTo(5, PRECISION);
});

test('Calculate the intersection of a segment and a line', () => {
  const s1 = [
    { x: 0, y: 0 },
    { x: 10, y: 10 },
  ];
  const l = { m: 1, c: 5 };
  const v = segmentLineIntersection(s1, l);
  expect(!v.x).toBeTruthy();
  expect(!v.y).toBeTruthy();
});
