import matrixClone from '@/functions/matrixClone';

const mat1 = [
    [1, 1],
    [2, 2],
  ],
  mat2 = [1, 2];

test('Clone [[1, 1], [2, 2]]', () => {
  expect(matrixClone(mat1)).toStrictEqual([
    [1, 1],
    [2, 2],
  ]);
});

test('Clone [1, 2]', () => {
  expect(matrixClone(mat2)).toStrictEqual([1, 2]);
});

test('Clone [[1, 1], [2, 2]] and add a row to the cloned matrix', () => {
  const clone = matrixClone(mat1);
  clone.push([3, 3]);
  expect(mat1).toStrictEqual([
    [1, 1],
    [2, 2],
  ]);
  expect(clone).toStrictEqual([
    [1, 1],
    [2, 2],
    [3, 3],
  ]);
});
