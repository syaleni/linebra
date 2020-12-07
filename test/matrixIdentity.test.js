import matrixIdentity from '@/functions/matrixIdentity';

test('Create a 2x2 identity matrix', () => {
  expect(matrixIdentity(2)).toStrictEqual([
    [1, 0],
    [0, 1],
  ]);
});

test('Create a 3x3 identity matrix', () => {
  expect(matrixIdentity(3)).toStrictEqual([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]);
});
