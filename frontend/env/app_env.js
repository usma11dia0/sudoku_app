import fs from 'fs';
import {fileURLToPath} from 'url';
import {resolve, dirname} from 'path';

//スクリプト自体の場所を基準にした絶対パスにて指定
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getConfig(env) {
  const rawConfig = fs.readFileSync(resolve(__dirname, '../conf/env.app.json'));
  const config = JSON.parse(rawConfig);
  return config[env];
}

export default getConfig;