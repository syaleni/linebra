import lineSlopeInterceptForm from '@/functions/lineSlopeInterceptForm';
import segmentLength from '@/functions/segmentLength';
import vertexOnLine from '@/functions/vertexOnLine';
/**
 * Find out if a vertex is on a line or not
 *
 * @since 1.0.0
 * @module Vertex
 * @param {Object} vertex { x: 1, y: 2 }
 * @param {Object} segment [{x, y}, {x, y}]
 * @param {Number} precision number of digits of rounding
 * @return {Boolean}
 *
 */
export default function vertexOnSegment(vertex, segment, precision) {
  const line = lineSlopeInterceptForm(segment);
  // If vertex is not on the line representing the segment, then it's not on the segment
  if (!vertexOnLine(vertex, line, precision)) return false;
  // If it's on the line, it might still be out of the segment
  const L = segmentLength(segment);
  const L1 = segmentLength([segment[0], vertex]);
  const L2 = segmentLength([segment[1], vertex]);
  const err = Math.abs(L - (L1 + L2));
  return Math.round(err * 10 ** precision) / 10 ** precision === 0;
}
