import matrixSwapRows from '@/functions/matrixSwapRows';

const mat = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];

test('Swap row 0 and 2 of [[1, 1, 1], [2, 2, 2], [3, 3, 3]]', () => {
  const res = matrixSwapRows(mat, 0, 2);

  expect(res).toStrictEqual([
    [3, 3, 3],
    [2, 2, 2],
    [1, 1, 1],
  ]);
});
