const linebra = require('./build/linebra.js');

console.log(
  linebra.centroidByVertices([
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 0, y: 10 },
  ]),
);
