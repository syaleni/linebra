/**
 * Calculate the Centroid of an Array of Vertics
 *
 * @since 1.0.0
 * @module Vertex
 * @param {Array} vertices Array of vertices.
 * @returns {Number} Returns the centroid of vertices.
 * @example
 * // returns {x: 3, y: 3}
 * centroidByVertices([{x: 0, y: 0}, {x: 9, y: 0}, {x: 0, y: 9}])
 */
export default function centroidByVertices(vertices) {
  const c = { x: 0, y: 0 };
  vertices.forEach((v) => {
    c.x += v.x;
    c.y += v.y;
  });

  return { x: c.x / vertices.length, y: c.y / vertices.length };
}
