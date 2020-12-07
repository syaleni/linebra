/**
 * Validate a matrix by:
 * 1. Checking all rows have the same number of elements
 *
 * @since 1.0.6
 * @module Validator
 * @param {Array} matrix [[a11, a12, ...], [a21, a22, ...], ...]
 * @return {Boolean}
 */
export default function validateMatrix(matrix) {
  // Check number of rows which their length is not equal to first row length
  return matrix.filter((row) => row.length !== matrix[0].length).length === 0;
}
