import matrixLeadMinors from '@/functions/matrixLeadMinors';

const mat = [
  [1, 2, 3],
  [2, 2, 2],
  [3, 3, 3],
];

test('Calculate leading minors of [[1, 2, 3], [2, 2, 2], [3, 3, 3]]', () => {
  const minors = matrixLeadMinors(mat);
  expect(minors[0]).toBe(-2);
  expect(minors[1]).toBe(1);
});
