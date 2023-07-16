import psycopg2
from env.app_env import POSTGRES_HOST, POSTGRES_DBNAME, POSTGRES_USER, POSTGRES_PASSWORD

# DBに接続
def connect_db():
    conn = psycopg2.connect(
        host = POSTGRES_HOST,
        database = POSTGRES_DBNAME,
        user= POSTGRES_USER,
        password = POSTGRES_PASSWORD,
    )
    return conn


