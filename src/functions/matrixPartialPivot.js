import matrixClone from '@/functions/matrixClone';
import matrixGetCol from '@/functions/matrixGetCol';
import matrixSwapRows from '@/functions/matrixSwapRows';
/**
 * Partial pivot a matrix (swap rows only)
 *
 * In partial pivoting, the algorithm selects the entry with largest absolute value from the column
 * of the matrix that is currently being considered as the pivot element. Partial pivoting is generally
 * sufficient to adequately reduce round-off error.
 * ref: https://en.wikipedia.org/wiki/Pivot_element#:~:text=In%20partial%20pivoting%2C%20the%20algorithm,adequately%20reduce%20round%2Doff%20error.
 *
 * The goal is to have an array in which:
 * Pivots are non-zero
 * Largest element (absolute value) in the column is the pivo
 *
 * @since 1.0.6
 * @module matrix
 * @param {Array} matrix
 * @return {Array}
 */
export default function matrixPartialPivot(matrix) {
  let out = matrixClone(matrix);
  const N = matrix.length;

  for (let i = 0; i < N; i++) {
    const pivot = out[i][i];

    // Find the absolute maximum of col i
    const col = matrixGetCol(out, i).slice(i, out[i].length),
      max = Math.max(...col),
      min = Math.min(...col),
      absMax = Math.max(Math.abs(max), Math.abs(min)),
      maxVal = max === 0 ? min : absMax / max === 1 ? max : min;

    // Reorder rows so the largest element of the column becomes the pivot
    if (Math.abs(pivot) < Math.abs(maxVal)) {
      const maxInColRowNo = matrixGetCol(out, i).indexOf(maxVal);
      out = matrixSwapRows(out, i, maxInColRowNo);
    }
  }

  return out;
  // TODO: consider [[1, 20, 3], [4, 100, 2], [3, 40, 1]]
  // Above algorithm will return
  // [ [4, 100, 2], [3, 40, 1], [1, 20, 3]]
}
