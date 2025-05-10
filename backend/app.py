from flask import Flask, request
from flask_cors import CORS, cross_origin

from backend.ocr import handlers


app = Flask(__name__)
app.config['DEBUG'] = True
app.config['PORT'] = 5000

cors = CORS(app, supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

handlers.add_handlers(app)
handlers.add(self)



@cross_origin()
@app.route('/', defaults={'path': '', 'handler': ''})
@app.route('/<handler>/<path:path>')
def rest(handler, path):
  if handler:
    handler_func = getattr(handlers, f'handle_{handler}')
    pass


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')