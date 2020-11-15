/**
 * Find out if a vertex is on a line or not
 *
 * @param {Object} line in slope-intercept format { m: 1, c: 1 } see lineSlopeInterceptForm
 * @param {Object} vertex { x: 1, y: 2 }
 * @param {Number} precision number of digits of rounding
 * @return {Boolean}
 */
function vertexOnLine(line, vertex, precision) {
  let delta;
  if (isFinite(line.m)) {
    delta = vertex.y - (line.m * vertex.x + line.c);
  } else {
    // Line is vertical
    delta = vertex.x - line.c;
  }
  return Math.round(delta * 10 ** precision) / 10 ** precision === 0;
}

export default vertexOnLine;
