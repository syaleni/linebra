import matrixDet2d from './matrixDet2d';
/**
 * Calculate determinant of a 2d matrix
 *
 * @since 1.0.4
 * @category Matrix
 * @param {Array} matrix Array of arrays [[1, 2, 3], [2, 3, 3], [3, 4, 5]]
 * @return {Number} Det of matrix
 */
function matrixDet3d(matrix) {
  if (matrix.length !== 3) throw new Error('Matrix size is wrong.');
  if (matrix[0].length !== 3) throw new Error('Matrix size is wrong.');
  if (matrix[1].length !== 3) throw new Error('Matrix size is wrong.');
  if (matrix[2].length !== 3) throw new Error('Matrix size is wrong.');

  const M0 = getSubMat(matrix, 0, 0);
  const M1 = getSubMat(matrix, 0, 1);
  const M2 = getSubMat(matrix, 0, 2);

  return (
    matrix[0][0] * matrixDet2d(M0) -
    matrix[0][1] * matrixDet2d(M1) +
    matrix[0][2] * matrixDet2d(M2)
  );
}

export default matrixDet3d;

function getSubMat(matrix, rowNum, colNum) {
  return matrix
    .filter((row, i) => i !== rowNum)
    .map((row) => row.filter((cell, j) => j !== colNum));
}
