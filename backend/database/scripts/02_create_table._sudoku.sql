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

-- サンプルデータの挿入
\copy sudoku_schema.problems(problem) FROM '/problems/L1_35_23.csv' DELIMITER ',' CSV;
\copy sudoku_schema.problems(problem) FROM '/problems/L5_32_1.csv' DELIMITER ',' CSV;
\copy sudoku_schema.problems(problem) FROM '/problems/L6_47_23.csv' DELIMITER ',' CSV;