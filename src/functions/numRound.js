/**
 * Round a number by the number of decimals given
 *
 * @since 1.0.6
 * @category Number
 * @param {Number} num
 * @param {Number} precision Number of decimals used for rounding
 * @return {Number}
 */
function numRound(num, precision) {
  if (isNaN(precision))
    throw new Error('Number of decimals for rounding is undefined');
  if (isNaN(num)) return num;

  const roundedNum = Math.round(num * 10 ** precision) / 10 ** precision;
  // Degenerate Case 1: -0
  if (roundedNum === -0) return 0;

  return roundedNum;
}

export default numRound;
