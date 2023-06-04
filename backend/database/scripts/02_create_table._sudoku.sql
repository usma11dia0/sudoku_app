-- DB切り替え
\c sudoku_db

-- テーブル作成
CREATE TABLE  sudoku_schema.problems (
  id SERIAL PRIMARY KEY,
  problem VARCHAR(81) NOT NULL
);

--　権限追加
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA sudoku_schema TO sudoku_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA sudoku_schema TO sudoku_user;

-- -- サンプルデータの挿入
-- \copy my_table(column1) FROM '/path/to/your/file.csv' DELIMITER ',' CSV;

-- /home/usma11dia0/dev/sudoku_app/backend/assets/result/L1_35_23.csv