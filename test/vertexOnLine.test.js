import PRECISION from './PRECISION';
import { vertexOnLine } from '../src/';

test('Find out if a given vertex is on a given line', () => {
  const line = { m: 0, c: 5 };
  const vertex = { x: 1, y: 5 };
  expect(vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given line', () => {
  const line = { m: 0, c: 5 };
  const vertex = { x: 1, y: 3 };
  expect(!vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given line', () => {
  const line = { m: Infinity, c: 5 };
  const vertex = { x: 5, y: 1 };
  expect(vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given line', () => {
  const line = { m: Infinity, c: 5 };
  const vertex = { x: 4, y: 1 };
  expect(!vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given line', () => {
  const line = { m: 1, c: 5 };
  const vertex = { x: 1, y: 6 };
  expect(vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given line', () => {
  const line = { m: 1, c: 5 };
  const vertex = { x: 1, y: 4 };
  expect(!vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given line', () => {
  const line = { m: 1.23, c: 5 };
  const vertex = { x: 1.35, y: 1.23 * 1.35 + 5 };
  expect(vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given line', () => {
  const line = { m: 4 / 3, c: 5 };
  const vertex = { x: 1.35, y: 1.33 * 1.35 + 5 };
  expect(vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given line', () => {
  const line = { m: 0, c: 2 };
  const vertex = { x: 1.35, y: 2 };
  expect(vertexOnLine(vertex, line, PRECISION)).toBeTruthy();
});
