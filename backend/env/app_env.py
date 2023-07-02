import json
import os

with open('conf/env.app.json', 'r') as f:
    env_conf = json.load(f)

app_env = env_conf[os.getenv('ENV', 'local')]