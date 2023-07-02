import psycopg2
from settings import POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD

# DBに接続
def connect_db():
    conn = psycopg2.connect(
        host = POSTGRES_HOST,
        database = POSTGRES_DB,
        user= POSTGRES_USER,
        password = POSTGRES_PASSWORD,
    )
    return conn


