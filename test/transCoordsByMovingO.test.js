import PRECISION from './PRECISION';
import transCoordsByMovingO from '@/functions/transCoordsByMovingO';

test('Calculate transformed coordinates of a vertex', () => {
  expect(transCoordsByMovingO({ x: 0, y: 0 }, { x: 1, y: 2 })).toStrictEqual({
    x: -1,
    y: -2,
  });
});

test('Calculate transformed coordinates of a vertex', () => {
  const { x, y } = transCoordsByMovingO(
    { x: 113 / 3, y: 89 / 3 },
    { x: 1.345, y: 2.987 },
  );
  expect(x).toBeCloseTo(36.32, PRECISION);
  expect(y).toBeCloseTo(26.68, PRECISION);
});
