import PRECISION from './PRECISION';
import matrixDet2d from '@/functions/matrixDet2d';

test('Calculate determinant of a 2d matrix', () => {
  const matrix = [
    [1, 3],
    [3, 1],
  ];

  expect(matrixDet2d(matrix)).toBeCloseTo(-8, PRECISION);
});

test('Calculate determinant of a 2d matrix', () => {
  const matrix = [
    [1, 3],
    [3, 3],
  ];

  expect(matrixDet2d(matrix)).toBeCloseTo(-6, PRECISION);
});

test('Calculate determinant of a 2d matrix', () => {
  const matrix = [
    [1, 3],
    [0, 3],
  ];

  expect(matrixDet2d(matrix)).toBeCloseTo(3, PRECISION);
});
