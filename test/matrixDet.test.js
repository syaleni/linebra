import PRECISION from './PRECISION';
import matrixDet from '@/functions/matrixDet';

test('Calculate det of a 3x3 matrix', () => {
  const matrix = [
    [1, 3, 2],
    [0, 1, 3],
    [0, 0, 1],
  ];

  expect(matrixDet(matrix)).toBeCloseTo(1, PRECISION);
});

test('Calculate det of a 4x4 matrix', () => {
  const matrix = [
    [1, 5, 0, 2],
    [3, 8, 0, 3],
    [9, 4, 0, 1],
    [2, 3, 0, 8],
  ];

  expect(matrixDet(matrix)).toBeCloseTo(0, PRECISION);
});
