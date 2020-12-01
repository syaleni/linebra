import { vertexOnVertex } from '../src/';

test('Check if two vertices are considered the same', () => {
  const v1 = { x: 0, y: 0 };
  const v2 = { x: 0.01, y: 0 };

  expect(vertexOnVertex(v1, v2, 0)).toBeTruthy();
});

test('Check if two vertices are considered the same', () => {
  const v1 = { x: 0, y: 0 };
  const v2 = { x: 0.01, y: 0 };

  expect(vertexOnVertex(v1, v2, 1)).toBeTruthy();
});

test('Check if two vertices are considered the same', () => {
  const v1 = { x: 0, y: 0 };
  const v2 = { x: 0.01, y: 0 };

  expect(!vertexOnVertex(v1, v2, 2)).toBeTruthy();
});
