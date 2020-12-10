import matrixAddToRow from '@/functions/matrixAddToRow';

const matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

test('Add 1 to row 0', () => {
  const mat2 = matrixAddToRow(matrix, 0, 1);
  expect(mat2).toStrictEqual([
    [2, 2, 2, 2],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]);
});

test('Add [1, 2, 3, 4] to row 0', () => {
  const mat2 = matrixAddToRow(matrix, 0, [1, 2, 3, 4]);

  expect(mat2).toStrictEqual([
    [2, 3, 4, 5],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]);
});

test('Add [1, 2, 3, 4] to row 1', () => {
  const mat2 = matrixAddToRow(matrix, 1, [1, 2, 3, 4]);

  expect(mat2).toStrictEqual([
    [1, 1, 1, 1],
    [2, 3, 4, 5],
    [1, 1, 1, 1],
  ]);
});

test('Add [1, 2, 3] to row 1', () => {
  const mat2 = matrixAddToRow(matrix, 1, [1, 2, 3]);

  expect(mat2).toStrictEqual([
    [1, 1, 1, 1],
    [2, 3, 4, 1],
    [1, 1, 1, 1],
  ]);
});
