/**
 * Calculate intersection of two lines
 *
 * @since 1.0.0
 * @module Line
 * @param {Object} line1 in slope-intercept format { m: 1, c: 1 } see lineSlopeInterceptForm
 * @param {Object} line2 in slope-intercept format { m: 1, c: 1 } see lineSlopeInterceptForm
 * @return {Object} {x, y}
 */
export default function linesIntersection(line1, line2) {
  if (line1.m === line2.m) {
    //lines are parallel or the same
    return { x: undefined, y: undefined };
  }
  if (!isFinite(line1.m)) {
    //line 1 is vertical
    return { x: line1.c, y: line2.m * line1.c + line2.c };
  }
  if (!isFinite(line2.m)) {
    //line 2 is vertical
    return { x: line2.c, y: line1.m * line2.c + line1.c };
  }
  const x = (line2.c - line1.c) / (line1.m - line2.m);
  const y = line1.m * x + line1.c;
  return { x, y };
}
