import matrixLU from '@/functions/matrixLU';
import matrixMultiply from '@/functions/matrixMultiply';

const mat1 = [
  [3, 1],
  [4, 2],
];
const mat2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const mat3 = [
  [11, 9, 24, 2],
  [1, 5, 2, 6],
  [3, 17, 18, 1],
  [2, 5, 7, 1],
];

test('Calculate LU decomposition of [[3, 1], [4, 2]]', () => {
  const { lower, upper } = matrixLU(mat1);

  expect(lower).toStrictEqual([
    [1, 0],
    [4 / 3, 1],
  ]);
  expect(upper).toStrictEqual([
    [3, 1],
    [0, 0.6666666666666667],
  ]);
  expect(matrixMultiply(lower, upper)).toStrictEqual(mat1);
});

test('Calculate LU decomposition of [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
  const { lower, upper } = matrixLU(mat2);

  expect(lower).toStrictEqual([
    [1, 0, 0],
    [4, 1, 0],
    [7, 2, 1],
  ]);
  expect(upper).toStrictEqual([
    [1, 2, 3],
    [0, -3, -6],
    [0, 0, 0],
  ]);
  expect(matrixMultiply(lower, upper)).toStrictEqual(mat2);
});

test('Calculate LU decomposition of [[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]]', () => {
  const { lower, upper } = matrixLU(mat3);

  expect(matrixMultiply(lower, upper)).toStrictEqual(mat3);
});
