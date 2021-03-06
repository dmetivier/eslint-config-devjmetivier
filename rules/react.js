/* eslint-disable @typescript-eslint/no-var-requires */
const { OFF, WARN, ERROR } = require('../constants');

module.exports = {
  plugins: ['react'],

  rules: {
    'react/display-name': [ERROR, { ignoreTranspilerName: false }],
    'react/forbid-component-props': OFF,
    'react/forbid-elements': OFF,
    'react/forbid-prop-types': OFF,
    'react/forbid-foreign-prop-types': OFF,
    'react/jsx-boolean-value': OFF,
    'react/jsx-handler-names': ERROR,
    'react/jsx-key': ERROR,
    'react/jsx-no-bind': OFF,
    'react/jsx-no-comment-textnodes': ERROR,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-literals': OFF,
    'react/jsx-no-target-blank': ERROR,
    'react/jsx-no-undef': ERROR,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-sort-props': ERROR,
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'react/no-array-index-key': ERROR,
    'react/no-children-prop': OFF,
    'react/no-danger': OFF,
    'react/no-danger-with-children': ERROR,
    'react/no-deprecated': ERROR,
    'react/no-did-mount-set-state': ERROR,
    'react/no-did-update-set-state': ERROR,
    'react/no-direct-mutation-state': ERROR,
    'react/no-find-dom-node': ERROR,
    'react/no-is-mounted': ERROR,
    'react/no-multi-comp': OFF,
    'react/no-render-return-value': ERROR,
    'react/no-set-state': OFF,
    'react/no-string-refs': ERROR,
    'react/no-unescaped-entities': WARN,
    'react/no-unknown-property': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/no-will-update-set-state': ERROR,
    'react/prefer-es6-class': OFF,
    'react/prefer-stateless-function': ERROR,
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': ERROR,
    'react/require-default-props': OFF,
    'react/require-optimization': OFF,
    'react/require-render-return': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': OFF,
    'react/sort-prop-types': ERROR,
    'react/style-prop-object': ERROR,
    'react/void-dom-elements-no-children': ERROR,
    'react/default-props-match-prop-types': ERROR,
    'react/jsx-child-element-spacing': WARN,
    'react/jsx-curly-brace-presence': [WARN, { props: 'never', children: 'ignore' }],
    'react/jsx-curly-newline': [ERROR, { multiline: 'consistent', singleline: 'consistent' }],
    'react/no-access-state-in-setstate': ERROR,
    'react/no-redundant-should-component-update': ERROR,
    'react/no-this-in-sfc': ERROR,
    'react/no-typos': ERROR,
    'react/no-unsafe': WARN,
    'react/no-unused-state': ERROR,
    'react/boolean-prop-naming': OFF,
    'react/button-has-type': OFF,
    'react/destructuring-assignment': OFF,
    'react/forbid-dom-props': OFF,
    'react/jsx-max-depth': OFF,
    'react/jsx-props-no-multi-spaces': OFF,
    'react/jsx-sort-default-props': ERROR,
    'react/jsx-fragments': [ERROR, 'syntax'],
    'react/jsx-props-no-spreading': [OFF, { html: 'ignore', custom: 'ignore' }],
    'react/state-in-constructor': [OFF, 'always'],
    'react/prefer-read-only-props': OFF,
    'react/static-property-placement': [WARN],
  },
};
