import verticesDist from '@/functions/verticesDist';
import numRound from '@/functions/numRound';
/**
 * Find out if two vertices are considered the same
 *
 * @since 1.0.6
 * @module Vertex
 * @param {Object} v1 {x, y}
 * @param {Object} v2 {x, y}
 * @param {Number} precision Number of decimals to be considered in comparisons
 * @return {Boolean}
 */
export default function vertexOnVertex(v1, v2, precision) {
  const d = verticesDist([v1, v2]);
  return numRound(d, precision) === 0 ? true : false;
}
