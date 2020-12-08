/**
 * Find the kth leading submatrices of a matrix
 *
 * The leading principal submatrix of order k of an n × n matrix is obtained by deleting the
 * last n − k rows and column of the matrix. The determinant of a leading principal submatrix
 * is called the leading principal minor of A.
 * ref: http://www.pitt.edu/~luca/ECON2001/lecture_08.pdf
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix [[a11, a12, ...], [a21, a22, ...], ...]
 * @return {Array} kth leading submat
 */
export default function matrixLeadSubmat(matrix, k) {
  return matrix
    .filter((row, i) => i < matrix.length - k)
    .map((row) => row.filter((cell, j) => j < matrix.length - k));
}
