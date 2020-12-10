import matrixPartialPivot from '@/functions/matrixPartialPivot';

const mat = [
  [1, 20, 3],
  [4, 100, 2],
  [3, 40, 1],
];

test('Partial pivot [[1, 20, 3], [4, 100, 2], [3, 40, 1]]', () => {
  const out = matrixPartialPivot(mat);

  expect(out).toStrictEqual([
    [4, 100, 2],
    [3, 40, 1],
    [1, 20, 3],
  ]);
});
