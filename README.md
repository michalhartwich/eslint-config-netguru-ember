# eslint-config-netguru-ember

> ESlint shareable config for [eslint-plugin-netguru-ember](https://github.com/netguru/eslint-plugin-netguru-ember)

## Summary

It's a shareable config that extends AirBnB Config with rules from our [eslint-plugin-netguru-ember](https://github.com/netguru/eslint-plugin-netguru-ember).
This is recommended by us config for any Ember Application. It assures that your code is in great shape and that you're following all good standards from [AirBnB's JavaScript Styleguide](https://github.com/airbnb/javascript) and our [Ember Styleguide](https://github.com/netguru/ember-styleguide).

## Requirements

You need to have `ember-cli-eslint` installed in your app. [More info here](https://github.com/ember-cli/ember-cli-eslint).

## Usage

##### 1. Install `eslint-config-airbnb-base` and it's dependencies. [Read more](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

  ```shell
    npm install --save-dev eslint-config-airbnb-base eslint-plugin-import
  ```

##### 2. Install our config and plugin

  ```shell
    npm install --save-dev eslint-config-netguru-ember eslint-plugin-netguru-ember
  ```

##### 3. Change your `.eslintrc`, so it looks like this:

  ```shell
    extends: netguru-ember
  ```

You can find more informations about rules we provide [here](https://github.com/netguru/eslint-plugin-netguru-ember#rules).

All rules and settings from `index.js` can be overriden in your `.eslintrc`.
So if you for example want to disable the rule `netguru-ember/local-modules` your `.eslintrc` 
should look like this:

  ```shell
    extends: netguru-ember
    rules:
      netguru-ember/local-modules: 0
  ```
