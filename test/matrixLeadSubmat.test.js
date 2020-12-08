import matrixLeadSubmat from '@/functions/matrixLeadSubmat';

const mat = [
  [1, 2, 3],
  [2, 2, 2],
  [3, 3, 3],
];

test('Calculate 1st leading submat. of [[1, 2, 3], [2, 2, 2], [3, 3, 3]]', () => {
  expect(matrixLeadSubmat(mat, 1)).toStrictEqual([
    [1, 2],
    [2, 2],
  ]);
});

test('Calculate 2nd leading submat. of [[1, 2, 3], [2, 2, 2], [3, 3, 3]]', () => {
  expect(matrixLeadSubmat(mat, 2)).toStrictEqual([[1]]);
});
