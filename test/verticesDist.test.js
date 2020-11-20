import PRECISION from './PRECISION';
import { verticesDist } from '../src/';

test('Calculate distance from one vertex to another', () => {
  const vertices = [
    { x: 0, y: 0 },
    { x: 9, y: 0 },
  ];

  expect(verticesDist(vertices)).toBe(9);
})

test('Calculate distance from one vertex to another', () => {
  const vertices = [
    { x: 0, y: 0 },
    { x: 9, y: 9 },
  ];

  expect(verticesDist(vertices)).toBeCloseTo(9 * Math.sqrt(2), PRECISION);
})