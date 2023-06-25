import fs from 'fs';
import {resolve, dirname, join} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); //ファイルの絶対パス(/app/webpack.dev.js)
const __dirname = dirname(__filename); //ルートディレクトリ(/app)

let destinationFilename = join(__dirname, 'src/index_bundle.html');  

//バンドル用のindex.htmlを作成
fs.copyFileSync('./src/index.html', destinationFilename);

// // 不要な行を削除
let file = fs.readFileSync(destinationFilename, 'utf8');
file = file.replace(/<link rel="icon" type="image\/png" sizes="32x32" href="\.\/assets\/icons\/00125-1923713431\.jpg">\n/g, '');
file = file.replace(/<link rel="stylesheet" href="css\/css-reset\.css">\n/g, '');
file = file.replace(/<link rel="stylesheet" href="css\/style\.css">/g, '');

fs.writeFileSync(destinationFilename, file);

export default {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: `bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index_bundle.html',
      favicon: './src/assets/icons/00125-1923713431.jpg',
    }),
    new MiniCssExtractPlugin({
      filename: `test.css`,
    })
  ],
}

// src/index_bundle.htmlを削除
fs.unlinkSync(destinationFilename);