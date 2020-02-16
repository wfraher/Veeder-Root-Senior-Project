from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import sys

sys.path.insert(1, 'pythonFiles')

app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/")
class testClass(Resource):
    def get(self):
        return {'test':'test result'}       


api.add_resource(testClass, '/flasktest')


if __name__ == '__main__':
   app.run(port=5002)
