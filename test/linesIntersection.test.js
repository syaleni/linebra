import PRECISION from './PRECISION';
import { linesIntersection } from '../src/';

test('Calculate intersection of two lines', () => {
  const line1 = { m: 0, c: 5 };
  const line2 = { m: 1, c: 0 };
  const { x, y } = linesIntersection(line1, line2);

  expect(x).toBeCloseTo(5, PRECISION);
  expect(y).toBeCloseTo(5, PRECISION);
});

test('Calculate intersection of two lines', () => {
  const line1 = { m: Infinity, c: 5 };
  const line2 = { m: 1, c: 0 };
  const { x, y } = linesIntersection(line1, line2);

  expect(x).toBeCloseTo(5, PRECISION);
  expect(y).toBeCloseTo(5, PRECISION);
});

test('Calculate intersection of two lines', () => {
  const line1 = { m: Infinity, c: 5 };
  const line2 = { m: Infinity, c: 0 };
  const { x, y } = linesIntersection(line1, line2);

  expect(x).toBe(undefined);
  expect(y).toBe(undefined);
});

test('Calculate intersection of two lines', () => {
  const line1 = { m: 2.34, c: 3 };
  const line2 = { m: 1, c: 1.33 };
  const { x, y } = linesIntersection(line1, line2);

  expect(x).toBeCloseTo(-1.25, PRECISION);
  expect(y).toBeCloseTo(0.08, PRECISION);
});
