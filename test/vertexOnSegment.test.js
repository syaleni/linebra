import PRECISION from './PRECISION';
import { vertexOnSegment } from '../src/';

test('Find out if a given vertex is on a given segment', () => {
  const segment = [
    { x: 0, y: 0 },
    { x: 5, y: 5 },
  ];
  const vertex = { x: 1, y: 5 };
  expect(!vertexOnSegment(vertex, segment, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given segment', () => {
  const segment = [
    { x: 0, y: 0 },
    { x: 5, y: 5 },
  ];
  const vertex = { x: 1, y: 1 };
  expect(vertexOnSegment(vertex, segment, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given segment', () => {
  const segment = [
    { x: 0, y: 0 },
    { x: 5, y: 5 },
  ];
  const vertex = { x: 6, y: 6 };
  expect(!vertexOnSegment(vertex, segment, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given segment', () => {
  const segment = [
    { x: 0, y: 0 },
    { x: 0, y: 5 },
  ];
  const vertex = { x: 6, y: 6 };
  expect(!vertexOnSegment(vertex, segment, PRECISION)).toBeTruthy();
});

test('Find out if a given vertex is on a given segment', () => {
  const segment = [
    { x: 0, y: 0 },
    { x: 5, y: 0 },
  ];
  const vertex = { x: 6, y: 6 };
  expect(!vertexOnSegment(vertex, segment, PRECISION)).toBeTruthy();
});
