-- DB作成
CREATE DATABASE sudoku_db; 

-- 作成したDBへ切り替え
\c sudoku_db

-- スキーマ作成
CREATE SCHEMA sudoku_schema;

-- ロールの作成
CREATE ROLE sudoku_user WITH LOGIN PASSWORD 'sudoku_user';

-- 権限追加
GRANT ALL PRIVILEGES ON SCHEMA sudoku_schema TO sudoku_user;


