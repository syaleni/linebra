import PRECISION from './PRECISION';
import { vertexDistToLine } from '../src';

test('Calculate the distance from a vertex to a line', () => {
    const line = { m: 0, c: 5 };
    const vertex = { x: 1, y: 0 };
    expect(vertexDistToLine(vertex, line, PRECISION)).toEqual(5);
});

test('Calculate the distance from a vertex to a line', () => {
    const line = { m: -Infinity, c: 5 };
    const vertex = { x: 1, y: 0 };
    expect(vertexDistToLine(vertex, line, PRECISION)).toEqual(4);
});

test('Calculate the distance from a vertex to a line', () => {
    const line = { m: -1/2, c: 5/4 };
    const vertex = { x: -3, y: 2 };
    expect(vertexDistToLine(vertex, line, PRECISION)).toBeCloseTo( 3 / (2 * Math.sqrt(5)));
});
  