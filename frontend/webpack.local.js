import HtmlWebpackPlugin from 'html-webpack-plugin';
import {merge}  from 'webpack-merge';
import pkg from 'webpack';

import commonConf from './webpack.common.js';
import getConfig from './env/app_env.js';

const { DefinePlugin } = pkg;
const outputFile = '[name]';
const assetFile = '[name]';

export default () => {
  const config = getConfig('local');

  return merge(commonConf({outputFile, assetFile}), {
  mode: 'development', //local用
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      scriptLoading: 'defer',
      favicon: './src/assets/icons/favicon.jpg',
    }),
    new DefinePlugin({
        SERVICE_URL: JSON.stringify(config.BACKEND_URL)
    })
  ],
});
}