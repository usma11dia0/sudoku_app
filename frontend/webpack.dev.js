import HtmlWebpackPlugin from 'html-webpack-plugin';
import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { merge } from 'webpack-merge';

import commonConf from './webpack.common.js';

const outputFile = '[name].[chunkhash]';
const assetFile = '[contenthash]';

export default () => merge(commonConf({outputFile, assetFile}), {
  mode: 'production',
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
    })
  ],
});