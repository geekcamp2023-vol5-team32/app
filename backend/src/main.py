from flask import Flask
from dotenv import load_dotenv
import os

from sound2text import callWhisper

app = Flask(__name__)
load_dotenv(verbose=True)

doDebug = True if os.getenv("DEBUG").lower() == "true" else False

@app.route("/")
def whisper():
    messege = callWhisper("小森めと.mp4")
    return messege

if __name__=="__main__":
    app.run(debug=doDebug, host='0.0.0.0', port=5000)