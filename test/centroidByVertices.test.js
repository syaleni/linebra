import PRECISION from './PRECISION';
import centroidByVertices from '@/functions/centroidByVertices';

test('Calculate centroid of 3 vertices', () => {
  expect(
    centroidByVertices([
      { x: 0, y: 0 },
      { x: 9, y: 0 },
      { x: 0, y: 9 },
    ]),
  ).toStrictEqual({ x: 3, y: 3 });
});

test('Calculate centroid of 3 vertices', () => {
  expect(
    centroidByVertices([
      { x: 0, y: 0 },
      { x: 9, y: 0 },
      { x: 4.5, y: 9 },
    ]),
  ).toStrictEqual({ x: 4.5, y: 3 });
});

test('Calculate centroid 4 vertices', () => {
  expect(
    centroidByVertices([
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ]),
  ).toStrictEqual({ x: 5, y: 5 });
});

test('Calculate centroid of 8 vertices', () => {
  expect(
    centroidByVertices([
      { x: 6, y: 0 },
      { x: -6, y: 0 },
      { x: 6, y: 4 },
      { x: -6, y: 4 },
      { x: 3, y: 4 },
      { x: -3, y: 4 },
      { x: 3, y: 12 },
      { x: -3, y: 12 },
    ]),
  ).toStrictEqual({ x: 0, y: 5 });
});

test('Calculate centroid of 3 vertices', () => {
  const { x, y } = centroidByVertices([
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 0, y: 10 },
  ]);
  expect(x).toBeCloseTo(10 / 3, PRECISION);
  expect(y).toBeCloseTo(10 / 3, PRECISION);
});
