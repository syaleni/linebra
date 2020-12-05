import PRECISION from './PRECISION';
import transCoordsByRotAb from '@/functions/transCoordsByRotAb';

test('Calculate transformed coordinates of a vertex', () => {
  const { x, y } = transCoordsByRotAb({ x: 5, y: 1 }, 90, { x: 1, y: 1 });
  expect(x).toBeCloseTo(1, PRECISION);
  expect(y).toBeCloseTo(5, PRECISION);
});
