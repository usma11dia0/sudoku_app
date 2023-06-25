import { fileURLToPath } from 'url';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({outputFile, assetFile}) => ({
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: `${outputFile}.js`,
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
            ]
          },
          {
            test: /\.ttf$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts',
                  publicPath: 'fonts', //サーバー上のパス情報
                }
              }
            ]
          },
          {
            test: /\.[jpe?g|png]$/,
            use:[
              {
                loader: 'file-loader',
                options: {
                  name: `${assetFile}.[ext]`,
                  outputPath: 'icons',
                  publicPath: 'icons', //サーバー上のパス情報
                }
              }
            ],
          },
          {
            test: /\.html$/,
            use: ['html-loader'],
          },
        ],
    },
    plugins:[
      new MiniCssExtractPlugin({
        filename: `${outputFile}.css`,
      })
    ]
  }
);