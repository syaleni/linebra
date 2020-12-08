import matrixIsSymmetric from '@/functions/matrixIsSymmetric';

const mat1 = [1, 2],
  mat2 = [
    [1, 2],
    [2, 1],
  ],
  mat3 = [
    [1, 2, 3],
    [2, 2, 2],
    [3, 3, 3],
  ],
  mat4 = [
    [1, 2, 1],
    [2, 2, 3],
    [1, 3, 3],
  ];

test('Matrix [1, 2] is not symmetric', () => {
  expect(!matrixIsSymmetric(mat1)).toBeTruthy();
});

test('Matrix [[1, 2], [2, 1]] is symmetric', () => {
  expect(matrixIsSymmetric(mat2)).toBeTruthy();
});

test('Matrix [[1, 2, 3], [2, 2, 2], [3, 3, 3]] is not symmetric', () => {
  expect(!matrixIsSymmetric(mat3)).toBeTruthy();
});

test('Matrix [[1, 2, 1], [2, 2, 3], [1, 3, 3]] is symmetric', () => {
  expect(matrixIsSymmetric(mat4)).toBeTruthy();
});
