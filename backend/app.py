import os

from dotenv import load_dotenv
from flask import Flask

from route.gpt_route import chatGPT_module
from route.whisper_route import whisper_module

app = Flask(__name__)
load_dotenv(verbose=True)

doDebug = True if os.getenv("DEBUG").lower() == "true" else False

app.register_blueprint(chatGPT_module)
app.register_blueprint(whisper_module)

if __name__=="__main__":
    app.run(debug=doDebug, host='0.0.0.0', port=5000)