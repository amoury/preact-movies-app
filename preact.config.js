const path = require('path');

export default (config, env, helpers) => {
  config.resolve.alias['@utils'] = path.resolve(__dirname, 'src/utils.js');
}