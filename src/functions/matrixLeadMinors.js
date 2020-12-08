import matrixLeadSubmats from '@/functions/matrixLeadSubmats';
import matrixDet from '@/functions/matrixDet';
/**
 * Find all leading principal minors of a matrix
 *
 * The determinant of a leading principal submatrix
 * is called the leading principal minor of a matrix.
 * ref: http://www.pitt.edu/~luca/ECON2001/lecture_08.pdf
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix [[a11, a12, ...], [a21, a22, ...], ...]
 * @return {Array} [1st leading principal minor, 2nd leading principal minor, ....]
 */
export default function matrixLeadMinors(matrix) {
  return matrixLeadSubmats(matrix).map((leadSubmat) => {
    return matrixDet(leadSubmat);
  });
}
