import matrixClone from '@/functions/matrixClone';
/**
 * Swap two rows of a matrix
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} matrix
 * @param {Number} i
 * @param {Number} j
 */
export default function matrixSwapRows(matrix, i, j) {
  const out = matrixClone(matrix);
  const trgtRows = [matrix[i], matrix[j]];
  out[i] = trgtRows[1];
  out[j] = trgtRows[0];
  return out;
}
