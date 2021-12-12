const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  webpack.init(env);
  webpack.useConfig('angular');

  webpack.chainWebpack((config) => {
    // shared scss
    config.resolve.alias.set(
      '@xplat-ng-ns/xplat-scss',
      resolve(__dirname, '../../libs/xplat/scss/src/')
    );
    config.resolve.alias.set(
      '@xplat-ng-ns/xplat-nativescript-scss',
      resolve(__dirname, '../../libs/xplat/nativescript/scss/src/')
    );
  });

  return webpack.resolveConfig();
};
