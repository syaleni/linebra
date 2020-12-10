/**
 * Clone a matrix
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix
 * @return {Array}
 */
export default function matrixClone(matrix) {
  return !Array.isArray(matrix[0])
    ? Array.apply(null, { length: matrix.length }).map((cell, i) => matrix[i])
    : Array.apply(null, { length: matrix.length }).map((row, i) =>
        Array.apply(null, { length: matrix[0].length }).map(
          (cell, j) => matrix[i][j],
        ),
      );
}
