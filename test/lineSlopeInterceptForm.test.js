import PRECISION from './PRECISION';
import { lineSlopeInterceptForm } from '../src/';

test('Calculate line-intercept form of a line passing two vertices', () => {
  const vertices = [
    { x: 0, y: 0 },
    { x: 9, y: 0 },
  ];

  const line = lineSlopeInterceptForm(vertices);

  expect(line.m).toBeCloseTo(0, PRECISION);
  expect(line.c).toBeCloseTo(0, PRECISION);
});

test('Calculate line-intercept form of a line passing two vertices', () => {
  const vertices = [
    { x: 9, y: 3 },
    { x: 9, y: 0 },
  ];

  const line = lineSlopeInterceptForm(vertices);

  expect(line.m).toBe(Infinity);
  expect(line.c).toBeCloseTo(9, PRECISION);
});

test('Calculate line-intercept form of a line passing two vertices', () => {
  const vertices = [
    { x: 3, y: 3 },
    { x: 9, y: 9 },
  ];

  const line = lineSlopeInterceptForm(vertices);

  expect(line.m).toBeCloseTo(1, PRECISION);
  expect(line.c).toBeCloseTo(0, PRECISION);
});

test('Calculate line-intercept form of a line passing two vertices', () => {
  const vertices = [
    { x: 3, y: 6 },
    { x: 9, y: 12 },
  ];

  const line = lineSlopeInterceptForm(vertices);

  expect(line.m).toBeCloseTo(1, PRECISION);
  expect(line.c).toBeCloseTo(3, PRECISION);
});

test('Calculate line-intercept form of a line passing two vertices', () => {
  const vertices = [
    { x: 3, y: 6 },
    { x: 9, y: 9 },
  ];

  const line = lineSlopeInterceptForm(vertices);

  expect(line.m).toBeCloseTo(0.5, PRECISION);
  expect(line.c).toBeCloseTo(4.5, PRECISION);
});

test('Calculate line-intercept form of a line passing two vertices', () => {
  const vertices = [
    { x: 9, y: 9 },
    { x: 9, y: 9 },
  ];

  const line = lineSlopeInterceptForm(vertices);

  expect(line.m).toBe(undefined);
  expect(line.c).toBe(undefined);
});
