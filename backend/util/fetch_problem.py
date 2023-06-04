import sys
sys.path.append("/app") # PYTHONPATHへ一時的に追加

from database.queries import fetch_data

# DBからデータを取得
data_from_db = fetch_data()

print(data_from_db)
print(data_from_db[0][1])