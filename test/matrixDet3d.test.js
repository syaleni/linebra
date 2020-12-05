import PRECISION from './PRECISION';
import matrixDet3d from '@/functions/matrixDet3d';

test('Calculate determinant of a 3d matrix', () => {
  const matrix = [
    [1, 3, 2],
    [0, 1, 3],
    [0, 0, 1],
  ];

  expect(matrixDet3d(matrix)).toBeCloseTo(1, PRECISION);
});

test('Calculate determinant of a 3d matrix', () => {
  const matrix = [
    [3, 2, 1],
    [2, 1, -3],
    [4, 0, 1],
  ];

  expect(matrixDet3d(matrix)).toBeCloseTo(-29, PRECISION);
});
