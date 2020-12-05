import segmentsIntersection from '@/functions/segmentsIntersection';
import validateVertex from '@/functions/validateVertex';
import vertexOnVertex from '@/functions/vertexOnVertex';
import lineSlopeInterceptForm from '@/functions/lineSlopeInterceptForm';
import numRound from '@/functions/numRound';
import validatePolygon from '@/functions/validatePolygon';
/**
 * Find out if a point is located inside a polygon or not
 *
 * @since 1.0.6
 * @module Polygon
 * @param {Array} polygon Array of vertices [{x, y}, {x, y}, {x, y}, ...]
 * @param {Object} vertex {x, y}
 * @param {Number} precision Number of decimal points to be considered in comparisons
 * @return true or false
 */
export default function polygonPointInclusion(polygon, vertex, precision) {
  // 1. Validate polygon
  validatePolygon(polygon);

  // 2. Get polygon edges (Degenerate Case 1 is taken care of here)
  const edges = degenerateCase1(polygonEdges(polygon), vertex, precision);

  // 3. Shoot a ray from the vertex to the left
  // 3.1. Find min. x of polygon vertices
  const minX = polygon.reduce((acc, v, i) => {
    if (i === 0 || v.x <= acc) acc = v.x;
    return acc;
  }, null);
  // 3.2. Create the ray
  const rayL = [vertex, { x: minX, y: vertex.y }];
  // 3.3. Find intersections of the ray with all edges
  const intsL = edgesRayIntersections(edges, rayL, precision); // Degenerate Case 2 is taken care of here

  // 4. Shoot a ray from the vertex to the right
  // 4.1. Find max. x of polygon vertices
  const maxX = polygon.reduce((acc, v, i) => {
    if (i === 0 || v.x >= acc) acc = v.x;
    return acc;
  }, null);
  // 4.2. Create the ray
  const rayR = [vertex, { x: maxX, y: vertex.y }];
  // 4.3. Find intersections of the ray with all edges
  const intsR = edgesRayIntersections(edges, rayR, precision); // Degenerate Case 2 is taken care of here

  // 5. If both numbers are odd, the point is inside the polygon
  if ((intsL.length % 2 !== 0) & (intsR.length % 2 !== 0)) return true;
  return false;
}

/**
 * Degenerate Case 1
 * An edge is horizontal and have the same y as the vertex. As such,
 * rays shot at step 3 and 4 of polygonPointInclusion will fall on o
 * ne of the edges which results in infinte intersections. As such,
 * such edge will be ommited from the edges array.
 *
 * @param {Array} edges [ [{x, y}, {x, y}], [{x, y}, {x, y}], ... ]
 * @param {Object} vertex [{x, y}]
 * @param {Number} precision
 * @return {Array} Array of edges not causing degenerate case 1
 */
function degenerateCase1(edges, vertex, precision) {
  return edges.filter((e) => {
    const edgeSIF = lineSlopeInterceptForm(e);
    if (numRound(edgeSIF.m, precision) === 0) {
      // Edge is horizontal, calc delta y of vertex (rays) and edge
      const dy = Math.abs(edgeSIF.c - vertex.y);
      if (numRound(dy, precision) === 0) {
        // Edge will fall on top of ray
        return false;
      }
    }
    return true;
  });
}

/**
 * Degenerate Case 2
 * Ray intersects an edge at one end of the edge
 *
 * @param {Array} edges [ [{x, y}, {x, y}], [{x, y}, {x, y}], ... ]
 * @param {Array} ray [{x, y}, {x, y}]
 * @param {Number} precision
 * @return {Array} [{x, y}, {x, y}, ...]
 */
function edgesRayIntersections(edges, ray, precision) {
  return edges
    .map((edge) => {
      const v = segmentsIntersection(edge, ray);

      // Degenerate Case 2: v is one of polygon's vertices
      if (segmentEndsAtVertex(edge, v, precision)) {
        // Intersection is a polygon vertex
        return { x: undefined, y: undefined };
      }

      return v;
    })
    .filter((v) => validateVertex(v));
}

/**
 * Check if v is one of vertices of the given edge
 *
 * @param {Array} edge [{x, y}, {x, y}]
 * @param {Object} v {x, y}
 * @param {Number} precision
 * @return {Boolean}
 */
function segmentEndsAtVertex(edge, v, precision) {
  const c1 = vertexOnVertex(edge[0], v, precision);
  const c2 = vertexOnVertex(edge[1], v, precision);
  return c1 || c2;
}

/**
 * Transform polygon vertice to edges
 *
 * @param {Array} polygon [{x, y}, {x, y}, ...]
 * @return {Array} [[{x, y}, {x, y}], [{x, y}, {x, y}], ...]
 * @example
 * // return [ [{1, 1}, {2, 2}], [{2, 2}, {0, 2}], [{0, 2}, {1, 1}] ]
 * polygonEdges([{1, 1}, {2, 2}, {0,2}])
 */
function polygonEdges(polygon) {
  return polygon.reduce((acc, v, i, arr) => {
    if (i === arr.length - 1) {
      acc.push([v, arr[0]]);
    } else {
      acc.push([v, arr[i + 1]]);
    }
    return acc;
  }, []);
}

export { polygonEdges };
