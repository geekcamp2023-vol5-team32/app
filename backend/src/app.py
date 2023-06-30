import os

from dotenv import load_dotenv
from flask import Flask, Blueprint

from route.gpt_route import chatGPT_module
from route.whisper_route import whisper_module

load_dotenv(verbose=True)

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']

api_route_blueprint = Blueprint("api_route", __name__, url_prefix="/liscript/api/")

api_route_blueprint.register_blueprint(chatGPT_module)
api_route_blueprint.register_blueprint(whisper_module)

app.register_blueprint(api_route_blueprint)

if __name__=="__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)