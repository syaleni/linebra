import verticesDist from './verticesDist';
import numRound from './numRound';
/**
 * Find out if two vertices are considered the same
 *
 * @since 1.0.6
 * @category Vertex
 * @param {Object} v1 {x, y}
 * @param {Object} v2 {x, y}
 * @param {Number} precision Number of decimals to be considered in comparisons
 * @return {Boolean}
 */
function vertexOnVertex(v1, v2, precision) {
  const d = verticesDist([v1, v2]);
  return numRound(d, precision) === 0 ? true : false;
}

export default vertexOnVertex;
