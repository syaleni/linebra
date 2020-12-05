import verticesTurn from '@/functions/verticesTurn';

test('Calculate turn direction of three vertices', () => {
  const vertices = [
    { x: 0, y: 0 },
    { x: 9, y: 0 },
    { x: 4, y: 4 },
  ];

  expect(verticesTurn(vertices)).toBe('left');
});

test('Calculate turn direction of three vertices', () => {
  const vertices = [
    { x: 0, y: 0 },
    { x: 9, y: 9 },
    { x: 4, y: 4 },
  ];

  expect(verticesTurn(vertices)).toBe('colinear');
});

test('Calculate turn direction of three vertices', () => {
  const vertices = [
    { x: 0, y: 0 },
    { x: 9, y: 0 },
    { x: 4, y: -4 },
  ];

  expect(verticesTurn(vertices)).toBe('right');
});
