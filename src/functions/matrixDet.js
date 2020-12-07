import matrixDet2d from '@/functions/matrixDet2d';
import matrixSub from '@/functions/matrixSub';
import matrixIsSquare from '@/functions/matrixIsSquare';

/**
 * Calculate determinant of a nxn matrix
 * Ref: https://en.wikipedia.org/wiki/Determinant
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix [[a11, a12, ...], [a21, a22, ...], ...]
 * @return {Number}
 */
export default function matrixDet(matrix) {
  if (!matrixIsSquare(matrix))
    throw new Error('InvalidArgumentException - matrix is not square.');
  if (matrix.length === 2) return matrixDet2d(matrix);
  // TODO: Any row of col of matrix can be transversed. The best one would be the one with greatest number of zeros
  // TODO: If a row or column are all zeros, det is zero
  // TODO: if two rows or cols are equal, det is zero
  // TODO: if two rows or cols are proportional, det is zero
  // TODO: Computation time can be reduce by adding columns or rows to each other to create more zeros in one row or column
  return matrix[0].reduce((acc, cell, j) => {
    if (cell === 0) return acc;
    const subMat = matrixSub(matrix, [0], [j]);
    acc += cell * matrixDet(subMat); // matrixDet(subMat) is called cofactor of cell
    return acc;
  }, 0);
}
