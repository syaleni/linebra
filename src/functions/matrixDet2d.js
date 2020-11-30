/**
 * Calculate determinant of a 2d matrix
 *
 * @param {Array} matrix Array of arrays [[1, 2], [2, 3]]
 */
function matrixDet2d(matrix) {
  if (matrix.length !== 2) throw new Error('Matrix size is wrong.');
  if (matrix[0].length !== 2) throw new Error('Matrix size is wrong.');
  if (matrix[1].length !== 2) throw new Error('Matrix size is wrong.');

  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

export default matrixDet2d;
