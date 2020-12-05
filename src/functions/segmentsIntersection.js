import lineSlopeInterceptForm from '@/functions/lineSlopeInterceptForm';
import linesIntersection from '@/functions/linesIntersection';
import vertexOnSegment from '@/functions/vertexOnSegment';

/**
 * Calculate the intersection of two vertices
 *
 * @since 1.0.4
 * @module Segment
 * @param {Array} s1 Array of two vertices [{x, y}, {x, y}]
 * @param {Array} s2 Array of two vertices [{x, y}, {x, y}]
 * @return {Object} Intersection of the segments {x, y}
 */
export default function segmentsIntersection(s1, s2) {
  const l1 = lineSlopeInterceptForm(s1);
  const l2 = lineSlopeInterceptForm(s2);
  const v = linesIntersection(l1, l2);

  if (!(v.x || v.y)) return { x: undefined, y: undefined };

  if (vertexOnSegment(v, s1, 3) && vertexOnSegment(v, s2, 3)) {
    return v;
  } else {
    return { x: undefined, y: undefined };
  }
}
