import configparser

config = configparser.ConfigParser()
config.read('config.ini')

#環境設定
CURRENT_ENV = 'local'

env = config['CURRENT_ENV']

HOST = env['']
