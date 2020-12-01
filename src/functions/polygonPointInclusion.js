import segmentsIntersection from './segmentsIntersection';
import validateVertex from './validateVertex';
import vertexOnVertex from './vertexOnVertex';
import lineSlopeInterceptForm from './lineSlopeInterceptForm';
import numRound from './numRound';
import validatePolygon from './validatePolygon';
/**
 * Find out if a point is located inside a polygon or not
 *
 * @since 1.0.6
 * @category Polygon
 * @param {Array} polygon Array of vertices [{x, y}, {x, y}, {x, y}, ...]
 * @param {Object} vertex {x, y}
 * @param {Number} precision Number of decimal points to be considered in comparisons
 * @return true or false
 */
function polygonPointInclusion(polygon, vertex, precision) {
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

// Degenerate Case 1
function degenerateCase1(edges, vertex, precision) {
  // Degenerate Case 1: An edge is horizontal and have the same y as the vertex
  // rays shot at step 3 and 4 will fall on one of the edges which results in infinte
  // intersections. As such, it'll be ommited from the edges array
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

// Degenerate Case 2
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

function segmentEndsAtVertex(edge, v, precision) {
  // check if v is one of vertices of the given edge
  const c1 = vertexOnVertex(edge[0], v, precision);
  const c2 = vertexOnVertex(edge[1], v, precision);
  return c1 || c2;
}

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

export { validatePolygon, polygonEdges };
export default polygonPointInclusion;
