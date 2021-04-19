from gevent import monkey

monkey.patch_all()

from flask import Flask
from flask import request, jsonify
from flask_cors import CORS  # comment this on deployment
from backend.ttapi import TTApi

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app)
ttApi = TTApi()


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/analytics/<username>', methods=['GET'])
def getUserInfoAnalytics(username):
    if request.method == 'GET':
        ttApi.setUser(username)
        response = ttApi.getUserInfoAnalytics()
        return response
