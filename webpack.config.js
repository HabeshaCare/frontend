const path = require('path');

module.exports = {
  // Other webpack configuration options
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};