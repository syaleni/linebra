/**
 * Validate a polygon
 *
 * @since 1.0.6
 * @category Validator
 * @param {Array} polygon [{x, y}, {x, y}, ...]
 * @return {Boolean}
 */
function validatePolygon(polygon) {
  // Find the number of distinct vertices
  const distinctVertices = polygon.filter((v, i, arr) => {
    return arr.findIndex((v2) => v2.x === v.x && v2.y === v.y) === i;
  });
  if (distinctVertices.length < 3)
    throw new Error('Polygon should have min. 3 distinct vertices.'); // This will cover the case where the polygon itself has less than 3 vertices
  return true;
}

export default validatePolygon;
