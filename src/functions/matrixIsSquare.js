/**
 * Determine if a matrix is square or not
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix [[a11, a12, ...], [a21, a22, ...], ...]
 * @return {Boolean}
 * @example
 * matrixIsSquare([1, 2])
 * // returns false
 * @example
 * matrixIsSquare([1, 2], [2, 1])
 * // returns true
 */
export default function matrixIsSquare(matrix) {
  return (
    matrix.filter((row) => {
      return !Array.isArray(row) || row.length !== matrix.length;
    }).length === 0
  );
}
