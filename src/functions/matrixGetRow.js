/**
 * Get a deep copy of a row of a matrix
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix
 * @param {Number} i
 */
export default function matrixGetRow(matrix, i) {
  return new Array(...matrix[i]);
}
