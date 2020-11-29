import transCoordsByAxesRot from './transCoordsByAxesRot';
import transCoordsByMovingO from './transCoordsByMovingO';
/**
 * Transform the Coordinates of a Vertex by Rotation About a Vertex
 *
 * @since 1.0.4
 * @category Vertex
 * @param {Object} vertex { x: 1, y: 0 }
 * @param {Number} angle in degrees, clockwise positive
 * @param {Object} refVertex { x: 3, y: 3 }
 * @returns {Number} Returns the new coords of vertex.
 *
 * @example
 * transCoordsByMovingO({x: 5, y: 1}, 90, {x: 1, y: 1})
 * // => {x: 1, y: 5}
 */
function transCoordsByRotAb(vertex, angle, refVertex) {
  // 1. Move O to refVetex
  let transVertex = transCoordsByMovingO(vertex, refVertex);
  // 2. Rotate axis
  transVertex = transCoordsByAxesRot(transVertex, -1 * angle);
  // 3. Move O back to {x: 0, y: 0}
  transVertex = transCoordsByMovingO(transVertex, {
    x: -1 * refVertex.x,
    y: -1 * refVertex.y,
  });
  return transVertex;
}

export default transCoordsByRotAb;
