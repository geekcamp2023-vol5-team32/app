import os
import uuid

import openai
from dotenv import load_dotenv
from flask import Blueprint, flash, jsonify, redirect, request
from utils.listener import callWhisper
from werkzeug.utils import secure_filename

whisper_module = Blueprint("whisper_route", __name__)

basedir = os.path.dirname(__file__)
load_dotenv(verbose=True)
openai.api_key = os.getenv("OPENAI_API_KEY")

UPLOAD_FOLDER = os.path.join(basedir, "../audio/")
ALLOWED_EXTENSIONS = {'mp3',"m4a"}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@whisper_module.route("/convert", methods=['GET', 'POST'])
def convert_audio_text():
    if request.method == 'POST':

        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        recieved_file = request.files['file']
        recieved_filename = recieved_file.filename

        if recieved_filename == '':
            flash('No selected file')
            return redirect(request.url)
        
        if recieved_file and allowed_file(recieved_filename):
            hashing = lambda fname: str(uuid.uuid5(uuid.NAMESPACE_DNS, fname))

            filename, extention = recieved_filename.split(".")
            export_filename = secure_filename(hashing(filename) + F".{extention}")
            
            try:
                os.makedirs(UPLOAD_FOLDER, exist_ok=True)
                export_filepath = os.path.join(UPLOAD_FOLDER, export_filename)
                recieved_file.save(export_filepath)
            except:
                flash('An error occurred while the file was being saved or transferred.')
                return redirect(request.url)
            
            # 以下はWhisperの処理
            try:
                messege = callWhisper(export_filename)
            except:
                flash('An error occurred during speech recognition')
                return redirect(request.url)

            os.remove(export_filepath)
            return jsonify(messege)

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''

# 参考
# https://qiita.com/fghyuhi/items/d42ce8cb1f5de5280ac5
# https://msiz07-flask-docs-ja.readthedocs.io/ja/latest/patterns/fileuploads.html
