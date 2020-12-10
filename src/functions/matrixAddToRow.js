/**
 * Add a number or a row to a row of a matrix
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 * @param {Number} rowNo Target row
 * @param {Number | Array} add Number or array to be added to the target row
 * @return {Array} [[2, 3, 4], [2, 3, 4], [3, 4, 5]]
 * @example
 * matrixAddToRow([[1, 2, 3], [2, 3, 4], [3, 4, 5]], 0, 1)
 * // returns [[2, 3, 4], [2, 3, 4], [3, 4, 5]]
 * @example
 * matrixAddToRow([[1, 2, 3], [2, 3, 4], [3, 4, 5]], 0, [1, 2, 3])
 * // returns [[2, 4, 5], [2, 3, 4], [3, 4, 5]]
 */
export default function matrixAddToRow(matrix, rowNo, add) {
  return matrix.map((row, i) =>
    i === rowNo
      ? row.map((cell, j) => cell + (Array.isArray(add) ? add[j] || 0 : add))
      : row,
  );
}
