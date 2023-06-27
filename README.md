# 数独カンニング用サイト:🔍:
数独問題の答えを提供します。:warning: 作成中

<!-- イメージ画像 -->
<!-- ![image](https://user-images.githubusercontent.com/30208963/192075555-5fbde9f1-1e59-4fd5-a793-bf3d42d372d4.png) -->

<!-- URL: https://japanese-quiz-app.site -->

<!-- ## デモ動画
![demo_japanese_quiz_app](https://user-images.githubusercontent.com/30208963/192776306-37bb3e9f-31af-4a4e-bb04-457e62ca2ebf.gif) -->

<!-- ## アーキテクチャ図
![image](https://user-images.githubusercontent.com/30208963/191673281-c1bc36a0-1703-411a-9deb-e6c649ab057c.png) -->

## 技術スタック一覧
- **Backend:** Python
- **Frontend:** JavaScript
- **Infra:** AWS (ECS[Fargate] / RDS / ALB / Route53 / ACM )
- **CI/CD**: AWS (CodeBuild + CodePipeline)

## 使用バージョン
- **Docker** Docker version 24.0.2
- **docker-compose** docker-compose version 1.29.2

---
## ローカル起動方法
1. git cloneにてローカルにsudoku_appを取り入れる。  
2. ルートディレクトリに`.env`ファイルを作成
```yaml:.env
POSTGRES_PASSWORD=postgres
```
3. **./backend/**配下に、`config.ini`ファイルを作成
```yaml:config.ini
[local]
POSTGRES_HOST = db
POSTGRES_USER = sudoku_user
POSTGRES_PASSWORD = sudoku_user
POSTGRES_DB = sudoku_db
```
4. ルートディレクトリへ移動し`docker-compose up -d`コマンドを実行
5. Webブラウザ上で`http://localhost:8080/`へアクセス

