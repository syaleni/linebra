/**
 * Validate format of a vertex
 *
 * @since 1.0.6
 * @category Validator
 * @param {Object} vertex
 * @return {Boolean}
 */
function validateVertex(vertex) {
  return !(isNaN(vertex.x) || isNaN(vertex.y));
}

export default validateVertex;
