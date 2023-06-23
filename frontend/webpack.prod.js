import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMerge from 'webpack-merge';
import {commonConf} from './webpack.common';

const outputFile = '[name].[chunkhash]';
const assetFile = '[contenthash]';

export const prodConf = () => webpackMerge(commonConf({outputFile, assetFile}), {
    mode: 'production',
    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body' //分割
      })
    ],
  }
);