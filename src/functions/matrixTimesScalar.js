/**
 * Multiply a matrix by a factor
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix
 * @param {Number} factor
 * @return {Array}
 * @example
 * matrixTimesScalar([[1, 1], [2, 2]], 2)
 * // returns [[2, 2], [4, 4]]
 */
export default function matrixTimesScalar(matrix, factor) {
  if (isNaN(factor)) return matrix;
  if (Array.isArray(matrix[0])) {
    //[[1, 1], [2, 2]]
    return matrix.map((row) => row.map((cell) => cell * factor));
  } else {
    // [1, 2]
    return matrix.map((cell) => cell * factor);
  }
}
