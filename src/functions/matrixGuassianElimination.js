import matrixAddtoRow from '@/functions/matrixAddToRow';
import matrixTimesScalar from '@/functions/matrixTimesScalar';
import matrixClone from '@/functions/matrixClone';
import matrixDet from '@/functions/matrixDet';
import numRound from '@/functions/numRound';
import matrixPartialPivot from '@/functions/matrixPartialPivot'; // Operation 1;
import matrixSwapRows from '@/functions/matrixSwapRows'; // Operation 1;

// Operation type 2
function matrixMultiplyRow(matrix, i, factor) {
  const out = matrixClone(matrix);
  out[i] = matrixTimesScalar(matrix[i], factor);
  return out;
}

// Operation type 3
function matrixAddRows(matrix, i, j, factor = 1) {
  const out = matrixClone(matrix);
  if (factor === 1) return matrixAddtoRow(out, i, matrix[j]);
  return matrixAddtoRow(out, i, matrixTimesScalar(matrix[j], factor));
}

export { matrixMultiplyRow, matrixAddRows };

/**
 * Solve a system of equations using Guassian Elimination
 *
 * @since 1.0.6
 * @module Matrix
 * @param {Array} left [[a11, a12, ...], [a21, a22, ...], ...]
 * @param {Array} right [b1, b2, b3 , ...]
 * @return {Array} [x1, x2, x3, ...]
 */
export default function matrixGuassianElimination(left, right) {
  if (numRound(matrixDet(left), 3) === 0)
    throw new Error('Determinant of the left side of the equations is zero.');

  const augMat = matrixPartialPivot(
      left.map((row, i) => new Array(...row, right[i])),
    ),
    A = augMat.map((row) => row.slice(0, -1)),
    b = augMat.map((row) => row.splice(-1, 1)[0]),
    x = Array.apply(null, { length: b.length }),
    N = A.length;

  // Create the row echelon form of A
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const ratio = A[j][i] / A[i][i];
      for (let k = i; k < N; k++) {
        A[j][k] -= ratio * A[i][k];
      }
      b[j] -= ratio * b[i];
    }
  }

  // Backward substitution
  x[N - 1] = b[N - 1] / A[N - 1][N - 1];
  for (let i = 2; i <= N; i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) {
      sum += A[N - i][N - i + j] * x[N - i + j];
    }
    x[N - i] = (b[N - i] - sum) / A[N - i][N - i];
  }

  return x;
}
