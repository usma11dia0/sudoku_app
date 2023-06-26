import os
import configparser

config = configparser.ConfigParser()
config.read('/app/config.ini') #別の箇所から読み込む?

environment = os.getenv('ENVIRONMENT', 'local')

def set_development():
    environment = 'development'
    return environment

config = config[environment]

# DBの設定値を読み込み
POSTGRES_HOST = config['POSTGRES_HOST']
POSTGRES_DB = config['POSTGRES_DB']
POSTGRES_USER = config['POSTGRES_USER']
POSTGRES_PASSWORD = config['POSTGRES_PASSWORD']