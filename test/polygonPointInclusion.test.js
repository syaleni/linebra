import PRECISION from './PRECISION';
import {
  validatePolygon,
  polygonEdges,
} from '@/functions//polygonPointInclusion';
import polygonPointInclusion from '@/functions/polygonPointInclusion';

test('Check a polygon condition', () => {
  let err = null;
  try {
    validatePolygon([
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ]);
  } catch (e) {
    err = e;
  }
  expect(err).toBeTruthy();
});

test('Check the edges of a polygon', () => {
  const edges = polygonEdges([
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 0, y: 10 },
  ]);
  expect(edges).toStrictEqual([
    [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
    ],
    [
      { x: 10, y: 0 },
      { x: 0, y: 10 },
    ],
    [
      { x: 0, y: 10 },
      { x: 0, y: 0 },
    ],
  ]);
});

test('Check if a vertex is inside a polygon', () => {
  const polygon = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 0, y: 10 },
  ];
  const vertex = { x: 1, y: 1 };
  const isInside = polygonPointInclusion(polygon, vertex, PRECISION);
  expect(isInside).toBeTruthy();
});

test('Check if a vertex is inside a polygon', () => {
  const polygon = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 0, y: 10 },
  ];
  const vertex = { x: 21, y: 1 };
  const isInside = polygonPointInclusion(polygon, vertex, PRECISION);
  expect(!isInside).toBeTruthy();
});

test('Check if a vertex is inside a polygon, Degenerate Case 1', () => {
  // Vertex is one of polygon's vertices
  // Polygon:
  // │\    /│
  // │ \__/ │
  // │      │
  // └──────┘

  const polygon = [
    { x: 0, y: 0 },
    { x: 30, y: 0 },
    { x: 30, y: 20 },
    { x: 20, y: 10 },
    { x: 10, y: 10 },
    { x: 0, y: 20 },
  ];
  const vertex1 = { x: 5, y: 10 };
  const isInside1 = polygonPointInclusion(polygon, vertex1, PRECISION);
  expect(isInside1).toBeTruthy();

  const vertex2 = { x: 15, y: 10 };
  const isInside2 = polygonPointInclusion(polygon, vertex2, PRECISION);
  expect(isInside2).toBeTruthy();

  const vertex3 = { x: 25, y: 10 };
  const isInside3 = polygonPointInclusion(polygon, vertex3, PRECISION);
  expect(isInside3).toBeTruthy();

  const vertex4 = { x: 35, y: 10 };
  const isInside4 = polygonPointInclusion(polygon, vertex4, PRECISION);
  expect(!isInside4).toBeTruthy();
});

test('Check if a vertex is inside a polygon, Degenerate Case 2', () => {
  // Y of vertex (outside of polygon) chosen such that left ray will pass through one of vertices of the polygon
  const polygon = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 0, y: 10 },
  ];
  const vertex1 = { x: 21, y: 10 };
  const isInside1 = polygonPointInclusion(polygon, vertex1, PRECISION);
  expect(!isInside1).toBeTruthy();

  const vertex2 = { x: 0, y: 10 };
  const isInside2 = polygonPointInclusion(polygon, vertex2, PRECISION);
  expect(!isInside2).toBeTruthy();
});

test('Check if a vertex is inside a polygon, Degenerate Case 2', () => {
  // Vertex is one of polygon's vertices
  // Polygon:
  // │\  /│
  // │ \/ │
  // │    │
  // └────┘

  const polygon = [
    { x: 0, y: 0 },
    { x: 20, y: 0 },
    { x: 20, y: 20 },
    { x: 10, y: 10 },
    { x: 0, y: 20 },
  ];
  const vertex1 = { x: 5, y: 10 };
  const isInside1 = polygonPointInclusion(polygon, vertex1, PRECISION);
  expect(isInside1).toBeTruthy();

  const vertex2 = { x: 17, y: 10 };
  const isInside2 = polygonPointInclusion(polygon, vertex2, PRECISION);
  expect(isInside2).toBeTruthy();

  const vertex3 = { x: 25, y: 10 };
  const isInside3 = polygonPointInclusion(polygon, vertex3, PRECISION);
  expect(!isInside3).toBeTruthy();
});
