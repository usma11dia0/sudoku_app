import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMerge from 'webpack-merge';
import commonConf from './webpack.common_old.js';

const outputFile = '[name].[chunkhash]';
const assetFile = '[contenthash]';

export default () => webpackMerge(commonConf({outputFile, assetFile}), {
    mode: 'production',
    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body' //分割
      })
    ],
  }
);