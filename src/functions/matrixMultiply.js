import validateMatrix from '@/functions/validateMatrix';
/**
 * Multiply two matrices
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} mat1
 * @param {Array} mat2
 * @return {Array} mat1 * mat2
 * @throws {InvalidArgumentException} If matrices are not valid or not compatible.
 */
export default function matrixMultipy(mat1, mat2) {
  // Check matrices are valid
  if (!validateMatrix(mat1) || !validateMatrix(mat2))
    throw new Error('InvalidArgumentException - Matrices are not valid.');

  // Check matrices are compatible
  if (mat1[0].length !== mat2.length)
    throw new Error('InvalidArgumentException - Matrices are not compatible.');

  // Create a matrix of zeros
  const out = Array.apply(null, { length: mat1.length }).map(() =>
    Array.apply(null, { length: mat2[0].length }).map(() => 0),
  );

  for (let i = 0, n = mat1.length; i < n; i++) {
    for (let j = 0, m = mat2[0].length; j < m; j++) {
      let sum = 0;
      for (let k = 0, l = mat2.length; k < l; k++) {
        sum += mat1[i][k] * mat2[k][j];
      }
      out[i][j] = sum;
    }
  }

  return out;
}
