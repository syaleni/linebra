/**
 * Get a sub-matrix by removing certain rows and columns of a matrix
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix
 * @param {Array} rows rows to be removed, first row number is 0
 * @param {Array} cols cols to be removed, first col number is 0
 * @return {Array} [[1, 2], [2, 3], [3, 4]]
 * @example
 * // returns [[1, 2], [2, 3], [3, 4]]
 * matrixSub([[1, 2, 3], [2, 3, 4], [3, 4, 5]], [], [2])
 */
export default function matrixSub(matrix, rows = [], cols = []) {
  return matrix
    .filter((row, i) => rows.indexOf(i) === -1)
    .map((row) => row.filter((cell, j) => cols.indexOf(j) === -1));
}
