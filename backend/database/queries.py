from database.connection import connect_db

def save_data(data_to_save: str) -> None:
    # DBに接続
    conn = connect_db()

    # カーソルを取得
    cur = conn.cursor()

    # データをデータベースに保存
    query = "INSERT INTO sudoku_schema.problems (problem) VALUES (%s);"
    cur.execute(query, (data_to_save,))

    # 変更をデータベースに保存
    conn.commit()

    # カーソルと接続を閉じる
    cur.close()
    conn.close()

def fetch_data(num: int) -> str:
    # DBに接続
    conn = connect_db()

    # カーソルを取得
    cur = conn.cursor()

    # DBからデータを取得
    cur.execute("SELECT * FROM sudoku_schema.problems;")
    data_from_db = cur.fetchall()
    target_data = data_from_db[num][1]

    # カーソルと接続を閉じる
    cur.close()
    conn.close()

    return target_data