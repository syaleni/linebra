/**
 * Find out if a vertex is on a line or not
 *
 * @since 1.0.0
 * @category Vertex
 * @param {Object} vertex { x: 1, y: 2 }
 * @param {Object} line in slope-intercept format { m: 1, c: 1 } see lineSlopeInterceptForm
 * @param {Number} precision number of digits of rounding
 * @return {Boolean}
 *
 */
function vertexOnLine(vertex, line, precision) {
  let err;
  if (isFinite(line.m)) {
    err = vertex.y - (line.m * vertex.x + line.c);
  } else {
    // Line is vertical
    err = vertex.x - line.c;
  }
  return Math.round(err * 10 ** precision) / 10 ** precision === 0;
}

export default vertexOnLine;
