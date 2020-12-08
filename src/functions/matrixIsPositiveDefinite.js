import matrixLeadMinors from '@/functions/matrixLeadMinors';
import matrixDet from '@/functions/matrixDet';
/**
 * Determine if a matrix is positive definite or not (real matrices only)
 *
 * A matrix is positive definite if it’s symmetric and all its eigenvalues are positive.
 * for a symmetric matrix the signs of the pivots are the signs of the
 * eigenvalues. Hence:
 * A matrix is positive definite if it’s symmetric and all its pivots are positive.
 * All the pivots will be positive if and only if det(Ak) > 0 for all 1 k n. So, if all upper left k x k
 * determinants of a symmetric matrix are positive, the matrix is positive definite.
 * ref: https://www.math.utah.edu/~zwick/Classes/Fall2012_2270/Lectures/Lecture33.pdf
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix
 * @return {Boolean}
 */
export default function matrixIsPositiveDefinite(matrix) {
  return !matrixLeadMinors(matrix)
    .concat(matrixDet(matrix))
    .some((item) => item < 0);
}
