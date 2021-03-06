const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'linebra.js',
    library: 'linebra',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src/')
    }
  }
};

module.exports = config;
