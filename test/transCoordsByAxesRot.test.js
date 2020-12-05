import PRECISION from './PRECISION';
import transCoordsByAxesRot from '@/functions/transCoordsByAxesRot';

test('Transofrm coords. of a vertix by rotating axes by 90 Deg.', () => {
  const { x, y } = transCoordsByAxesRot({ x: 5, y: 1 }, 90);
  expect(x).toBeCloseTo(1, PRECISION);
  expect(y).toBeCloseTo(-5, PRECISION);
});

test('Transofrm coords. of a vertix by rotating axes by 50 Deg.', () => {
  const { x, y } = transCoordsByAxesRot({ x: 2, y: 9 }, 50);

  expect(x).toBeCloseTo(8.18, PRECISION);
  expect(y).toBeCloseTo(4.25, PRECISION);
});
