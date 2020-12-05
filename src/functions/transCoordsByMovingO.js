/**
 * Transform the Coordinates of a Vertex by Moving the Origin
 *
 * @since 1.0.0
 * @module Vertex
 * @param {Object} vertex { x: 1, y: 0 }
 * @param {Object} newOrigin { x: 3, y: 3 }
 * @returns {Number} Returns the new coords of vertex.
 *
 * @example
 * // returns {x: 4, y: 4}
 * transCoordsByMovingO({x: 5, y: 5}, {x: 1, y: 1})
 */
export default function transCoordsByMovingO(vertex, newOrigin) {
  return {
    x: vertex.x - newOrigin.x,
    y: vertex.y - newOrigin.y,
  };
}
