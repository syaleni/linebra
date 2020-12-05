import matrixDet3d from '@/functions/matrixDet3d';

/**
 * Calculate the trun direction of a given set of vertices
 *
 * @since 1.0.4
 * @module Vertex
 * @param {Array} vertices [{x, y}, {x, y}, {x, y}
 * @return {String} turn direction: ["left", "right", "colinear"]
 *
 */
export default function verticesTurn(vertices) {
  const a =
    0.5 *
    matrixDet3d([
      [vertices[0].x, vertices[0].y, 1],
      [vertices[1].x, vertices[1].y, 1],
      [vertices[2].x, vertices[2].y, 1],
    ]);
  if (a > 0) return 'left';
  if (a < 0) return 'right';
  if (a === 0) return 'colinear';
}
