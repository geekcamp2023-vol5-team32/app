import os

from dotenv import load_dotenv
from flask import Flask

from route.gpt_route import chatGPT_module
from route.whisper_route import whisper_module

load_dotenv(verbose=True)

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']

app.register_blueprint(chatGPT_module)
app.register_blueprint(whisper_module)

if __name__=="__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)