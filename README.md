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

## Documentation

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

### Matrix

A matrix:

```ts
const mat1 = [
  [1, 2],
  [2, 1],
  [3, 3],
];

const mat2 = [1, 2, 3];
```
