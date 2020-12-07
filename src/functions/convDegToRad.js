/**
 * Convert Degrees to Radians
 *
 * @since 1.0.0
 * @module Utils
 * @param {Number} degrees
 * @returns {Number}
 * @example
 * convDegToRad(180);
 * // returns 3.1415
 */
export default function convDegToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
