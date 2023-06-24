import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';
import commonConf from './webpack.common.js';

const outputFile = '[name]';
const assetFile = '[name]';

export default () => merge(commonConf({outputFile, assetFile}), {
    mode: 'development',
    devtool: 'source-map',
    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body' //分割
      })
    ],
  }
);