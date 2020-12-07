import matrixIsSquare from '@/functions/matrixIsSquare';

const mat1 = [1, 2],
  mat2 = [
    [1, 2],
    [2, 2],
  ],
  mat3 = [
    [1, 2],
    [2, 2],
    [3, 3],
  ];

test('Matrix [1, 2] is not square', () => {
  expect(!matrixIsSquare(mat1)).toBeTruthy();
});

test('Matrix [[1, 2], [2, 2]] is square', () => {
  expect(matrixIsSquare(mat2)).toBeTruthy();
});

test('Matrix [[1, 2], [2, 2], [3, 3]] is not square', () => {
  expect(!matrixIsSquare(mat3)).toBeTruthy();
});
