import matrixIsSquare from '@/functions/matrixIsSquare';
/**
 * Determine if a matrix is symmetric or not
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix [[a11, a12, ...], [a21, a22, ...], ...]
 * @return {Boolean}
 */
export default function matrixIsSymmetric(matrix) {
  if (!matrixIsSquare(matrix)) return false;
  return !matrix.some((row, i) => {
    return row.some((cell, j) => {
      return cell !== matrix[j][i];
    });
  });
}
