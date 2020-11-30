import lineSlopeInterceptForm from './lineSlopeInterceptForm';
import linesIntersection from './linesIntersection';
import vertexOnSegment from './vertexOnSegment';

/**
 * Calculate the intersection of a line and a segment
 *
 * @since 1.0.4
 * @category Segment
 * @param {Array} segment Array of two vertices [{x, y}, {x, y}]
 * @param {Object} line Line in slope-intercept form {m, c}
 * @return {Object} Intersection of the line and segment {x, y}
 */
function segmentLineIntersection(segment, line) {
  const l1 = lineSlopeInterceptForm(segment);
  const v = linesIntersection(l1, line);

  if (!(v.x || v.y)) return { x: undefined, y: undefined };

  if (vertexOnSegment(v, segment, 3)) {
    return v;
  } else {
    return { x: undefined, y: undefined };
  }
}

export default segmentLineIntersection;
