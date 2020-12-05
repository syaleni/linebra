import convDegToRad from '@/functions/convDegToRad';
/**
 * Transform the Coordinates of a Vertice by Rotating the Axes
 *
 * @since 1.0.0
 * @module Vertex
 * @param {Object} vertex { x: 1, y: 0 }
 * @param {Number} angle in degrees, clockwise positive
 * @returns {Number} Returns the new coords of vertex.
 * @summary
 * { vx } = [ cos(a)  sin (a) ] { v'x }
 * { vy }   [ -sin(a) cos(a)  ] { v'y }
 *
 * @example
 * // returns {x: 1, y: -5}
 * transCoordsByAxesRot({x: 5, y: 1}, 90)
 */
export default function transCoordsByAxesRot(vertex, angle) {
  const angle_r = convDegToRad(angle);
  return {
    x: vertex.x * Math.cos(angle_r) + vertex.y * Math.sin(angle_r),
    y: -1 * vertex.x * Math.sin(angle_r) + vertex.y * Math.cos(angle_r),
  };
}
