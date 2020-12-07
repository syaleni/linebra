/**
 * Calculate the Area of an Array of Vertics using Shoelace formula.
 * Vertices should be in a clockwise or counter-clockwise order.
 * Connected vertices should be adjacent in the array passed,
 * otherwise the result will be wrong.
 *
 * @since 1.0.0
 * @module Vertex
 * @param {Array} vertices Array of vertices.
 * @returns {Number} Returns absolute value of area bound by vertices.
 * @example
 * areaByVertices([
 *  {x: 0, y: 0},
 *  {x: 10, y: 0},
 *  {x: 0, y: 10}
 * ]);
 * // returns 50
 */
export default function areaByVertices(vertices) {
  let area = 0;

  const numOfVerts = vertices.length;
  for (let i = 0; i < numOfVerts - 1; i++) {
    area +=
      vertices[i].x * vertices[i + 1].y - vertices[i].y * vertices[i + 1].x;
  }
  area +=
    vertices[numOfVerts - 1].x * vertices[0].y -
    vertices[numOfVerts - 1].y * vertices[0].x;
  return Math.abs(area / 2);
}
