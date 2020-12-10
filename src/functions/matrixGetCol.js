/**
 * Get a deep copy of a column of a matrix
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix
 * @param {Number} i
 */
export default function matrixGetCol(matrix, i) {
  return matrix.map((row) => row[i]);
}
