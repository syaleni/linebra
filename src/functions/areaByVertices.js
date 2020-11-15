/**
 * Calculate the Area of an Array of Vertics using Shoelace formula
 *
 * @since 1.0.0
 * @category Vertex
 * @param {Array} vertices Array of vertices.
 * @returns {Number} Returns the area bound by vertices.
 * @example
 *
 * areaByVertices([{x: 0, y: 0}, {x: 10, y: 0}, {x: 0, y: 10}])
 * // => 50
 *
 * @todo
 * Vertices should be in a clockwise or counter-clockwise order.
 * Connected vertices should be adjacent in the vertices array,
 * otherwise the result is wrong.
 */
function areaByVertices(vertices) {
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

export default areaByVertices;
