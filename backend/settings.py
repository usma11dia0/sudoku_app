import os
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

def is_development():
    return os.environ.get('ENVIRONMENT') == 'development'

if is_development():
    environment = 'development'
else:
    environment = 'production'

database_url = config.get(environment, 'database_url')
api_key = config.get(environment, 'api_key')