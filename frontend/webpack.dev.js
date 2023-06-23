import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMerge from 'webpack-merge';
import {commonConf} from './webpack.common';

const outputFile = '[name]';
const assetFile = '[name]';

export const devConf = () => webpackMerge(commonConf({outputFile, assetFile}), {
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