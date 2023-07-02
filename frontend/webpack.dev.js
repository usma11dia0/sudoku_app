import HtmlWebpackPlugin from 'html-webpack-plugin';
import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import pkg from 'webpack';
import {merge} from 'webpack-merge';

import commonConf from './webpack.common.js';
import getConfig from './env/app_env.js';

const { DefinePlugin } = pkg;
const outputFile = '[name].[chunkhash]';
const assetFile = '[contenthash]';

export default () => {
  const config = getConfig('dev')

  return merge(commonConf({outputFile, assetFile}), {
    mode: 'production', //dev用
    // output: {
    //   publicPath: '/assets/' //S3の参照先を記載
    // },
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new CSSMinimizerPlugin()
      ]
    },
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
  })
};