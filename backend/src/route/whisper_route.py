import os

import openai
from dotenv import load_dotenv
from flask import Blueprint, jsonify, request
from utils.listener import callWhisper

whisper_module = Blueprint("whisper_route", __name__)

basedir = os.path.dirname(__file__)
load_dotenv(verbose=True)
openai.api_key = os.getenv("OPENAI_API_KEY")

@whisper_module.route("/")
def whisper():
    messege = callWhisper("小森めと.mp4")
    return messege

@whisper_module.route("/convert",methods=['POST'])
def convert_audio_text():
    # POSTリクエストのボディから音声データを取得
    data = request.get_json()
    filename = data['filename']
    file_path = f'{filename}'
    # ファイルのパスを生成
    fpath = os.path.join(basedir, file_path)
    audio_file = open(fpath, "rb")
    # オーディオファイルをテキストに変換
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    response = transcript
    # 抽出されたテキストデータをjson形式で返す
    return jsonify(response)