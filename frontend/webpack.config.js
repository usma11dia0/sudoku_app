const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public'),
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
                  name: '[name].[ext]',
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
        filename: '[name].css'
      }),
      new HtmlWebpackPlugin({
        template: './src index.html',
        inject: 'body'
      })
    ],
  };