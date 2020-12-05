import matrixSub from '@/functions/matrixSub';

const matrix = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
  [51, 52, 53, 54],
];

test('Get sub-matrix by removing row 0 and col 3', () => {
  const subMat = matrixSub(matrix, [0], [3]);

  expect(subMat).toStrictEqual([
    [21, 22, 23],
    [31, 32, 33],
    [41, 42, 43],
    [51, 52, 53],
  ]);
});

test('Get sub-matrix by removing rows 0, 1 and col 1, 2, 3', () => {
  const subMat = matrixSub(matrix, [0, 1], [1, 2, 3]);

  expect(subMat).toStrictEqual([[31], [41], [51]]);
});

test('Get sub-matrix by removing row 0', () => {
  const subMat = matrixSub(matrix, [0]);

  expect(subMat).toStrictEqual([
    [21, 22, 23, 24],
    [31, 32, 33, 34],
    [41, 42, 43, 44],
    [51, 52, 53, 54],
  ]);
});

test('Get sub-matrix by removing col 0, 1', () => {
  const subMat = matrixSub(matrix, [], [0, 1]);

  expect(subMat).toStrictEqual([
    [13, 14],
    [23, 24],
    [33, 34],
    [43, 44],
    [53, 54],
  ]);
});
