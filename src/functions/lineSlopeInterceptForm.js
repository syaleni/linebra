/**
 * Calculate coeffs of a line from vertices : y = m * x + c
 *
 * @since 1.0.0
 * @param {Array} vertices [{ x: 1, y: 0 }, { x: 5, y: 0 }]
 * @return {Object} {m, c}
 */
function lineSlopeInterceptForm(vertices) {
  // Both vertices are the same
  if (vertices[1].x === vertices[0].x && vertices[1].y === vertices[0].y) {
    return { m: undefined, c: undefined };
  }
  // Vertices are on a vertical line
  if (vertices[1].x === vertices[0].x) {
    const c = vertices[1].x;
    return { m: Infinity, c };
  }
  // Vertices are on a horizontal or sloped line
  const m = (vertices[1].y - vertices[0].y) / (vertices[1].x - vertices[0].x);
  const c = vertices[1].y - m * vertices[1].x;
  return { m, c };
}

export default lineSlopeInterceptForm;
