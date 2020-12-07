/**
 * Creates a nxn identity matrix
 *
 * @param {Number} n size of matrix
 * @return {Array} [[a11, a12, ...], [a21, a22, ...], ...]
 * @example
 * matrixIdentity(2);
 * // returns [[1, 0], [0, 1]]
 */
export default function matrixIdentity(n) {
  return Array.apply(null, { length: n }).map((row, i) =>
    Array.apply(null, { length: n }).map((cell, j) => (i === j ? 1 : 0)),
  );
}
