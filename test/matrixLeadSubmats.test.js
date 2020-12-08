import matrixLeadSubmats from '@/functions/matrixLeadSubmats';

const mat = [
  [1, 2, 3],
  [2, 2, 2],
  [3, 3, 3],
];

test('Calculate leading submats of [[1, 2, 3], [2, 2, 2], [3, 3, 3]]', () => {
  const submats = matrixLeadSubmats(mat);
  expect(submats[0]).toStrictEqual([
    [1, 2],
    [2, 2],
  ]);
  expect(submats[1]).toStrictEqual([[1]]);
});
