import os
import json
import botocore
from botocore.exceptions import ClientError
from aws_secretsmanager_caching import SecretCache, SecretCacheConfig

# AWS Secret Managerからシークレットを取得
def get_secret(secret_name):
    try:
        client = botocore.session.get_session().create_client('secretsmanager')
    except ClientError as e:
        # For a list of exceptions thrown, see
        # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        raise e

    # シークレット値をクライアント側にてキャッシュ
    cache_config = SecretCacheConfig()
    cache = SecretCache( config = cache_config, client = client)
    secret = cache.get_secret_string(secret_name)

    return secret

environment = os.getenv('ENV', 'local')

with open('conf/env.app.json', 'r') as f:
    env_conf = json.load(f)
app_env = env_conf[environment]

if environment == 'dev':
    # dev環境の場合、AWS Secret Managerからシークレットを取得
    AWS_SECRETNAME = app_env['AWS_SECRETNAME']
    secret = get_secret(AWS_SECRETNAME)
    secret_dict = json.load(secret)
    app_env['POSTGRES_HOST'] = secret_dict['host']
    app_env['POSTGRES_DBNAME'] = secret_dict['dbname']
    app_env['POSTGRES_USER'] = secret_dict['username']
    app_env['POSTGRES_PASSWORD'] = secret_dict['password']

# DBの設定値を読込
POSTGRES_HOST = app_env['POSTGRES_HOST']
POSTGRES_DBNAME =  app_env['POSTGRES_DBNAME']
POSTGRES_USER = app_env['POSTGRES_USER']
POSTGRES_PASSWORD = app_env['POSTGRES_PASSWORD']

# フロントエンドURLを読み込み
FRONTEND_URL = app_env['FRONTEND_URL']