import json
from logging import config, getLogger

with open('conf/logging.json', 'r') as f:
    log_conf = json.load(f)

config.dictConfig(log_conf)
server_logger = getLogger("server")