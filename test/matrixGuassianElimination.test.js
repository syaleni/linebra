import PRECISION from './PRECISION';
import {
  matrixMultiplyRow,
  matrixAddRows,
} from '@/functions/matrixGuassianElimination';
import matrixGuassianElimination from '@/functions/matrixGuassianElimination';

const mat1 = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];

test('Multiply row 1 of [[1, 1, 1], [2, 2, 2], [3, 3, 3]] by 2', () => {
  const res = matrixMultiplyRow(mat1, 1, 2);
  expect(res).toStrictEqual([
    [1, 1, 1],
    [4, 4, 4],
    [3, 3, 3],
  ]);
});

test('Add -0.5 * row 1 to row 0 of [[1, 1, 1], [2, 2, 2], [3, 3, 3]] by 2', () => {
  const res = matrixAddRows(mat1, 0, 1, -0.5);
  expect(res).toStrictEqual([
    [0, 0, 0],
    [2, 2, 2],
    [3, 3, 3],
  ]);
});

test('Solve a system of equations using Guassian elimination', () => {
  const A = [
      [4, 3, 4],
      [9, 3, 4],
      [1, 1, 1],
    ],
    b = [8, 7, 3],
    x = [-0.2, 4, -0.8],
    sol = matrixGuassianElimination(A, b);

  expect(sol[0]).toBeCloseTo(x[0], PRECISION);
  expect(sol[1]).toBeCloseTo(x[1], PRECISION);
  expect(sol[2]).toBeCloseTo(x[2], PRECISION);
});

test('Solve a system of equations using Guassian elimination', () => {
  const A = [
      [0.003, 59.14],
      [5.291, -6.13],
    ],
    b = [59.17, 46.78],
    x = [10, 1],
    sol = matrixGuassianElimination(A, b);

  expect(sol[0]).toBeCloseTo(x[0], PRECISION);
  expect(sol[1]).toBeCloseTo(x[1], PRECISION);
});

test('Solve a system of equations where det. of A is zero ', () => {
  const A = [
      [4, 3, 4],
      [4, 3, 4],
      [1, 1, 1],
    ],
    b = [8, 7, 3];

  let expectedErr;

  try {
    matrixGuassianElimination(A, b);
  } catch (e) {
    expectedErr = e;
  }
  expect(expectedErr).toBeTruthy();
});
