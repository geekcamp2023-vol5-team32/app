import os
import uuid

import openai
from dotenv import load_dotenv
from flask import (Blueprint, flash, jsonify, redirect, request,
                   send_from_directory, url_for)
from utils.listener import callWhisper
from werkzeug.utils import secure_filename

whisper_module = Blueprint("whisper_route", __name__)

basedir = os.path.dirname(__file__)
load_dotenv(verbose=True)
openai.api_key = os.getenv("OPENAI_API_KEY")

UPLOAD_FOLDER = os.path.join(basedir, "../audio/")
ALLOWED_EXTENSIONS = {'mp3',"m4a"}

@whisper_module.route("/")
def whisper():
    messege = callWhisper("小森めと.mp4")
    return messege

# @whisper_module.route("/convert",methods=['POST'])
# def convert_audio_text():
#     # POSTリクエストのボディから音声データを取得
#     data = request.get_json()
#     filename = data['filename']
#     # ファイルのパスを生成
#     fpath = os.path.join(UPLOAD_FOLDER, filename)
#     audio_file = open(fpath, "rb")
#     # オーディオファイルをテキストに変換
#     transcript = openai.Audio.transcribe("whisper-1", audio_file)
#     response = transcript
#     # 抽出されたテキストデータをjson形式で返す
#     return jsonify(response)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@whisper_module.route("/convert", methods=['GET', 'POST'])
def convert_audio_text():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            file_name = file.filename.split(".")[0]
            file_extention = file.filename.split(".")[1]

            filename = str(uuid.uuid5(uuid.NAMESPACE_DNS, file_name))
            filename = secure_filename(filename + "." +file_extention)
            file.save(os.path.join(UPLOAD_FOLDER, filename))
            
            # 以下はWhisperの処理
            # ファイルのパスを生成
            fpath = os.path.join(UPLOAD_FOLDER, filename)
            audio_file = open(fpath, "rb")
            # オーディオファイルをテキストに変換
            transcript = openai.Audio.transcribe("whisper-1", audio_file)
            #response = transcript
            os.remove(fpath)
            # 抽出されたテキストデータをjson形式で返す
            return jsonify(transcript.text)

            #return redirect(url_for('whisper_route.download_file', name=filename))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''

# @whisper_module.route('/uploads/<name>')
# def download_file(name):
#     return send_from_directory(UPLOAD_FOLDER, name)

# 参考
# https://qiita.com/fghyuhi/items/d42ce8cb1f5de5280ac5
# https://msiz07-flask-docs-ja.readthedocs.io/ja/latest/patterns/fileuploads.html