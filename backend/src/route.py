# 実装時点ではフロント側が未実装。そのため、動作確認を行えていない。
# 動作確認が終了したらmain.pyに書き写す

from flask import Flask
from dotenv import load_dotenv
import os
import openai

#from chatGPT import arakiさんが実装した関数

app = Flask(__name__)
basedir = os.path.dirname(__file__)
load_dotenv(verbose=True)

doDebug = True if os.getenv("DEBUG").lower() == "true" else False

@app.route("/convert",methods=['POST'])
def convert_audio_text():
    # POSTリクエストのボディから音声データを取得
    data = request.get_json()
    filename = data['filename']
    file_path = f'{filename}
    # ファイルのパスを生成
    fpath = os.path.join(basedir, file_path)
    audio_file = open(fpath, "rb")
    # オーディオファイルをテキストに変換
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    response = transcript.text
    # 抽出されたテキストデータを返す
    return jsonify(response)

# 以下のコードは現時点では仮置き。
@app.route("/translate",methods=['POST'])
def translate_text():
    # POSTリクエストのボディからテキストデータを取得
    data = request.get_json()
    text = data['text']#どうやって送られてくるかは未確定
    translate = callChatGPT(text)
    response = {'result':translate}
    return response

if __name__=="__main__":
    app.run(debug=doDebug, host='0.0.0.0', port=5000)