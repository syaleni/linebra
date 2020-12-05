/**
 * Calculate distance of a vertex to a line
 *
 * @since 1.0.3
 * @module Vertex
 * @param {Object} vertex {x, y}
 * @param {Object} line {m , c} slope-intercept form
 * @return {Number}
 *
 */
export default function vertexDistToLine(vertex, line) {
  const { m, c } = line;
  const { x, y } = vertex;
  if (!isFinite(m)) {
    return Math.abs(x - c);
  }
  return Math.abs(-1 * m * x + 1 * y + -1 * c) / Math.sqrt(m ** 2 + 1);
}
