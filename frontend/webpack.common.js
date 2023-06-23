import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const commonConf = ({outputFile, assetFile}) => ({
    entry: './src/index.js',
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
                  outputPath: 'public/font',
                  publicPath: 'public/font', //サーバー上のパス情報
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
                  outputPath: 'public/icons',
                  publicPath: 'public/icons', //サーバー上のパス情報
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