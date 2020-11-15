/**
 * Transform the Coordinates of a Vertex by Moving the Origin
 *
 * @since 1.0.0
 * @category Vertex
 * @param {Object} vertex { x: 1, y: 0 }
 * @param {Object} newOrigin { x: 3, y: 3 }
 * @returns {Number} Returns the new coords of vertex.
 *
 * @example
 * transCoordsByMovingO({x: 5, y: 5}, {x: 1, y: 1})
 * // => {x: 4, y: 4}
 */
function transCoordsByMovingO(vertex, newOrigin) {
  return {
    x: vertex.x - newOrigin.x,
    y: vertex.y - newOrigin.y,
  };
}

export default transCoordsByMovingO;
