import validateMatrix from '@/functions/validateMatrix';

const mat1 = [
  [1, 2],
  [1, 2],
  [1, 2],
];
const mat2 = [[1, 2], [1], [1, 2]];

test('Validate [ [1, 2], [1, 2], [1, 2] ]', () => {
  expect(validateMatrix(mat1)).toBeTruthy();
});

test('Validate [ [1, 2], [1], [1, 2] ]', () => {
  expect(!validateMatrix(mat2)).toBeTruthy();
});
