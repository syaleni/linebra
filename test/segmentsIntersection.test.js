import PRECISION from './PRECISION';
import segmentsIntersection from '@/functions/segmentsIntersection';

test('Calculate the intersection of two segments', () => {
  const s1 = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
  ];
  const s2 = [
    { x: 5, y: -5 },
    { x: 5, y: 5 },
  ];
  const v = segmentsIntersection(s1, s2);
  expect(v.x).toBeCloseTo(5, PRECISION);
  expect(v.y).toBeCloseTo(0, PRECISION);
});

test('Calculate the intersection of two segments', () => {
  const s1 = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
  ];
  const s2 = [
    { x: 15, y: -5 },
    { x: 15, y: 5 },
  ];
  const v = segmentsIntersection(s1, s2);
  expect(!v.x).toBeTruthy();
  expect(!v.y).toBeTruthy();
});
