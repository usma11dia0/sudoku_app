import {resolve, dirname, join} from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); //ファイルの絶対パス(/app/webpack.dev.js)
const __dirname = dirname(__filename); //ルートディレクトリ(/app)

export default ({outputFile, assetFile}) => ({
  entry: './src/js/index.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: `${outputFile}.js`,
    assetModuleFilename: `assets/${assetFile}[ext]`
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.ttf$/,
        type: "asset/resource",
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: `${outputFile}.css`,
    })
  ]
})