from flask import Flask, request
from flask_cors import CORS, cross_origin

from backend.ocr import handlers


app = Flask(__name__)

cors = CORS(app, supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

handlers.add_handlers(app)


@cross_origin()
@app.route('/', defaults={'path': '', 'handler': ''})
@app.route('/<handler>/<path:path>')
def rest(handler, path):
    pass


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')