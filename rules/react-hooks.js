/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const { OFF, WARN, ERROR } = require('../constants');

module.exports = {
  plugins: ['react-hooks'],

  rules: {
    // react-hooks
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
  },
};
