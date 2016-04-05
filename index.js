'use strict'

module.exports = {
  extends: [
    'airbnb/base'
  ],
  globals: {
  },
  plugins: [
    'netguru-ember'
  ],
  rules: {
    'func-names': 0,
    'space-before-function-paren': 0,
    'no-shadow': 0,
    'no-else-return': 0,
    'no-extend-native': 0,
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'prefer-rest-params': 0,
    'consistent-return': 0,
    'netguru-ember/local-modules': 1,
    'netguru-ember/no-observers': 1,
    'netguru-ember/no-side-effects': 2,
    'netguru-ember/jquery-ember-run': 2,
    'netguru-ember/named-functions-in-promises': 2,
    'netguru-ember/order-in-objects': 1,
    'netguru-ember/order-in-models': 2
  }
}
