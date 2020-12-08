import matrixIsPositiveDefinite from '@/functions/matrixIsPositiveDefinite';

const mat1 = [
    [1, 2],
    [2, 1],
  ],
  mat2 = [
    [1, 2, 3],
    [2, 2, 2],
    [3, 3, 3],
  ],
  mat3 = [
    [2, -1, 0],
    [-1, 2, -1],
    [0, -1, 2],
  ];

test('Matrix [[1, 2], [2, 1]] is not positive definite', () => {
  expect(!matrixIsPositiveDefinite(mat1)).toBeTruthy();
});

test('Matrix [[1, 2, 3], [2, 2, 2], [3, 3, 3]] is not positive definite', () => {
  expect(!matrixIsPositiveDefinite(mat2)).toBeTruthy();
});

test('Matrix [[2, -1, 0], [-1, 2, -1], [0, -1, 2]] is positive definite', () => {
  expect(matrixIsPositiveDefinite(mat3)).toBeTruthy();
});
