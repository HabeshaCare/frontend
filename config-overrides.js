const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  return alias({
    '@': 'src'
  })(config);
};
