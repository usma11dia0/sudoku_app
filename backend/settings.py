import os

# DBの設定値を読み込み
# 開発環境の設定値はAWS Secret Manager参照
POSTGRES_HOST = os.getenv('POSTGRES_HOST', 'db')
POSTGRES_DB =  os.getenv('POSTGRES_DB', 'sudoku_db')
POSTGRES_USER = os.getenv('POSTGRES_USER', 'sudoku_user')
POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD','sudoku_user')