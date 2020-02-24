import typing

import flask
import werkzeug.wrappers
from flask import jsonify, request

from backend.ocr import api

request = typing.cast(werkzeug.wrappers.Request, request)


def example():
    """
    this is only a sample function
    :return:
    """
    return jsonify(api.sample_api())


def _add(app: flask.Flask, method: str, func: typing.Callable, url: str = None):
    if url is None:
        url = func.__name__
    app.add_url_rule(f'/api/v1/ocr/{url}',
                     view_func=func, methods=[method])


def add_handlers(app: flask.Flask):
    _add(app, 'GET', example)

