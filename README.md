# Linebra

A small library for linear algebra oprations.

## Installation

```
npm install @syaleni/linebra
```

## Usage

```ts
// ESM:
import * as linebra from 'linebra';
// CJS:
const linebra = require('linebra');
```

## Testing

```
npm run test
```

or run jest directly.

## Defintions

### Vertex

```ts
const v = { x: 1, y: 1 };
```

### Segment

```ts
const s = [
  { x: 1, y: 1 },
  { x: 3, y: 3 },
];
```

### Line

```ts
const l = { m: 1, c: 3 }; // i.e. y = m * x + c
```

### Polygon

An ordered set of vertices:

```ts
const p = [
  { x: 1, y: 1 },
  { x: 3, y: 3 },
  { x: 0, y: 3 },
];
```

## Functions

### Utilites

#### convDegToRad

Converts degrees to radians.

```ts
convDegToRad(180); // --> 3.1415
```

#### convRadToDeg

Converts radians to degrees.

```ts
convRadToDeg(1); // --> 57.29
```

#### areaByVertices

Calculates the area bound by a set of vertices using Shoelace formula.

Notes:

- Order of vertices matters
- Does not consider clockwise or anti-clockwise rotation (returns absolute value)

```ts
areaByVertices([
  { x: 0, y: 0 },
  { x: 5, y: 0 },
  { x: 5, y: 5 },
]); // --> 12.5
```

#### centroidByVertices

Calculates the centeroid of the area bound by a set of vertices.

Notes:

- Order of vertices does not matter
- Does not consider clockwise or anti-clockwise rotation

```ts
centroidByVertices([
  { x: 0, y: 0 },
  { x: 0, y: 5 },
  { x: 5, y: 0 },
]); // --> {x: 1.67, y: 1.67}
```
