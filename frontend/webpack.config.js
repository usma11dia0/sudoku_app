const path = require('path');
MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
          }
        ],
    },
    plugins:[
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
    ],
  };