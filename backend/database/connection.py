import psycopg2
import settings

# DBに接続
def connect_db():
    conn = psycopg2.connect(
        host=settings.POSTGRES_HOST,
        database=settings.POSTGRES_DB,
        user=settings.POSTGRES_USER,
        password=settings.POSTGRES_USER,
    )
    return conn


