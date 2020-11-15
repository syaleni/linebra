import PRECISION from './PRECISION';
import { areaByVertices } from '../src/';

test('Calculate area bound by 3 vertices', () => {
  expect(
    areaByVertices([
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 0, y: 10 },
    ]),
  ).toBe(50);
});

test('Calculate area bound by 3 vertices', () => {
  expect(
    areaByVertices([
      { x: 6, y: 6 },
      { x: 12, y: 6 },
      { x: 6, y: 12 },
    ]),
  ).toBe(18);
});

test('Calculate area bound by 3 vertices', () => {
  expect(
    areaByVertices([
      { x: 0, y: 0 },
      { x: 9, y: 0 },
      { x: 4.5, y: 9 },
    ]),
  ).toBe(40.5);
});

test('Calculate area bound by 4 vertices', () => {
  expect(
    areaByVertices([
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ]),
  ).toBe(100);
});

test('Calculate area bound by 8 vertices', () => {
  expect(
    areaByVertices([
      { x: 6, y: 0 },
      { x: 6, y: 4 },
      { x: 3, y: 4 },
      { x: 3, y: 12 },
      { x: -3, y: 12 },
      { x: -3, y: 4 },
      { x: -6, y: 4 },
      { x: -6, y: 0 },
    ]),
  ).toBe(96);
});

test('Calculate area bound by 3 vertices', () => {
  const area = areaByVertices([
    { x: 0, y: 0 },
    { x: 3.13, y: 0 },
    { x: 0, y: 2.21 },
  ]);
  expect(area).toBeCloseTo(3.45865, PRECISION);
});
