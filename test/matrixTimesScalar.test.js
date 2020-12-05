import matrixTimesScalar from '@/functions/matrixTimesScalar';

const mat1 = [1, 2, 3];
const mat2 = [
  [1, 2],
  [2, 3],
];

test('Multiply matrix by 3', () => {
  expect(matrixTimesScalar(mat1, 3)).toStrictEqual([3, 6, 9]);
});

test('Multiply matrix by 3', () => {
  expect(matrixTimesScalar(mat2, 3)).toStrictEqual([
    [3, 6],
    [6, 9],
  ]);
});
