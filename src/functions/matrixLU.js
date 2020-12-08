import matrixIsSquare from '@/functions/matrixIsSquare';
import matrixIdentity from '@/functions/matrixIdentity';

/**
 * Calculates the LU decomposition of a square matrix
 *
 * @param {Array} matrix [[a11, a12, ...], [a21, a22, ...], ...]
 * @returns {Object} {lower: <lower-triangular-matrix>, upper: <upper-triangular-matrix>}
 * @throws {InvalidArgumentException} if matrix is not square
 * @todo
 * We see in the second formula that to get the lower[i][j] below the diagonal, we have to
 * divide by the diagonal element (pivot) upper[j][j], so we get problems when upper[j][j]
 * is either 0 or very small, which leads to numerical instability. The solution to this
 * problem is pivoting A, which means rearranging the rows of A, prior to the LU decomposition,
 * in a way that the largest element of each column gets onto the diagonal of A.
 * Rearranging the rows means to multiply {\displaystyle A} by a permutation matrix P:
 * PA = A'
 * (Ref: https://rosettacode.org/wiki/LU_decomposition)
 * @todo
 * An invertible matrix A has an LU decomposition provided that all its leading submatrices have
 * non-zero determinants. How to get around it in such case? It is always possible to re-order the
 * rows of an  invertible matrix so that all of the submatrices have non-zero determinants.
 */
export default function matrixLU(matrix) {
  if (!matrixIsSquare(matrix))
    throw new Error('InvalidArgumentException - matrix is not square.');

  const lower = matrixIdentity(matrix.length),
    upper = matrixIdentity(matrix.length);

  // Start with upper matrix
  for (let i = 0, n = matrix.length; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = 0; k < i; k++) sum += upper[k][j] * lower[i][k];

      upper[i][j] = matrix[i][j] - sum;
    }

    // After populating ith row of upper matrix, populate i+1th row of lower matrix
    // For last row of upper, i+1th row of lower doesn't exist
    if (i === matrix.length - 1) continue;
    for (let j = 0; j < i + 1; j++) {
      let sum = 0;
      for (let k = 0; k < j; k++) sum += upper[k][j] * lower[i + 1][k];

      lower[i + 1][j] = (matrix[i + 1][j] - sum) / upper[j][j];
    }
  }

  return { lower, upper };
}
