/**
 * Convert Radians to Degrees
 *
 * @since 1.0.0
 * @module Utils
 * @param {Number} degrees
 * @returns {Number}
 * @example
 * convRadToDeg(1);
 * // returns 57.29
 */
export default function convRadToDeg(radians) {
  return (radians * 180) / Math.PI;
}
