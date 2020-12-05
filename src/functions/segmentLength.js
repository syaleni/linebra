/**
 * Calculate the length of a segment
 *
 * @since 1.0.4
 * @module Segment
 * @param {Array} segment Array of vertices [{x, y}, {x, y}]
 * @return {Number} Length of a segment
 */
export default function segmentLength(segment) {
  const v0 = segment[0];
  const v1 = segment[1];
  return Math.sqrt((v0.x - v1.x) ** 2 + (v0.y - v1.y) ** 2);
}
