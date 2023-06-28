import os
import sys
sys.path.append('/app') # PYTHONPATH(モジュール検索パス)へ一時的に追加

from database.queries import save_data

BASE_DIR ='/app'

# 問題データ格納先
problem_path = os.path.join(BASE_DIR, 'assets/result/L6_47_23.csv')
problem_data = ''
problem_data_to_save = ''

# 前処理
with open(problem_path) as f:
    problem_data = f.read()

    # DBに保存する前にカンマを削除
    problem_data_to_save = problem_data.strip(',\n').replace(',','')
    
    # DBへ保存
    save_data(problem_data_to_save)