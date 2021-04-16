from gevent import monkey

monkey.patch_all()

from flask import Flask, make_response
from flask import request, jsonify
from backend.ttapi import TTApi

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
ttApi = TTApi()


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/analytics/<username>', methods=['GET'])
def getAnalytics(username):
    if request.method == 'GET':
        ttApi.setUser(username)
        analytics_response = ttApi.getAnalytics()
        return make_response(jsonify(isError=False,
                                     message="Success",
                                     statusCode=200,
                                     data=analytics_response), 200)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
