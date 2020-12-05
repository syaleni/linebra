/**
 * Validate a polygon by:
 * 1. Number of disting vertices should be min. 3
 *
 * @since 1.0.6
 * @module Validator
 * @param {Array} polygon [{x, y}, {x, y}, ...]
 * @return {Boolean}
 */
export default function validatePolygon(polygon) {
  // Find the number of distinct vertices
  const distinctVertices = polygon.filter((v, i, arr) => {
    return arr.findIndex((v2) => v2.x === v.x && v2.y === v.y) === i;
  });
  if (distinctVertices.length < 3)
    throw new Error('Polygon should have min. 3 distinct vertices.'); // This will cover the case where the polygon itself has less than 3 vertices
  return true;
}
