import validateVertex from './validateVertex';
/**
 * Get distanse from one vertex to another
 *
 * @since 1.0.2
 * @category Vertex
 * @param {Array} vertices [{x, y}, {x, y}]
 * @return {Number}
 *
 */
function verticesDist(vertices) {
  const v1 = vertices[0];
  const v2 = vertices[1];
  // If any of the vertices are not in valid format, return undefined
  if (!(validateVertex(v1) || validateVertex(v2))) return undefined;

  const { x: x1, y: y1 } = v1;
  const { x: x2, y: y2 } = v2;
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export default verticesDist;
