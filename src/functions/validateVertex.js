/**
 * Validate a vertex by:
 * 1. It should include an x and y property with numeric value
 *
 * @since 1.0.6
 * @module Validator
 * @param {Object} vertex
 * @return {Boolean}
 */
export default function validateVertex(vertex) {
  return !(isNaN(vertex.x) || isNaN(vertex.y));
}
