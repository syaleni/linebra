import matrixMultiply from '@/functions/matrixMultiply';

test('Multiply [[1, 0], [0, 1]] to [[2, 2], [2, 2]]', () => {
  const mat1 = [
      [1, 0],
      [0, 1],
    ],
    mat2 = [
      [2, 2],
      [2, 2],
    ];

  expect(matrixMultiply(mat1, mat2)).toStrictEqual([
    [2, 2],
    [2, 2],
  ]);
});

test('Multiply [[1, 2, 3], [4, 5, 6]] to [[7, 8], [9, 10], [11, 12]]', () => {
  const mat1 = [
      [1, 2, 3],
      [4, 5, 6],
    ],
    mat2 = [
      [7, 8],
      [9, 10],
      [11, 12],
    ];

  expect(matrixMultiply(mat1, mat2)).toStrictEqual([
    [58, 64],
    [139, 154],
  ]);
});

test('Multiply [[3, 2, 1, 5], [9, 1, 3, 0]] to [[2, 9, 0], [1, 3, 5], [2, 4, 7], [8, 1, 5]]', () => {
  const mat1 = [
      [3, 2, 1, 5],
      [9, 1, 3, 0],
    ],
    mat2 = [
      [2, 9, 0],
      [1, 3, 5],
      [2, 4, 7],
      [8, 1, 5],
    ];

  expect(matrixMultiply(mat1, mat2)).toStrictEqual([
    [50, 42, 42],
    [25, 96, 26],
  ]);
});
