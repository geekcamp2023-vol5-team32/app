import json

from chat_gpt import Writer
from flask import jsonify, request, Blueprint

translate_module = Blueprint("app_route", __name__)

@translate_module.route("/translate", methods=['POST'])
def translate_text():
    data = request.get_data().decode("utf-8", "ignore")
    dataDict = json.loads(data)

    originalStr = dataDict['original_text'] 
    language = dataDict['language']

    writer = Writer(originalStr)
    translatedStr = writer.translatorGPT(targetLang=language)

    return jsonify({
        "language": language,
        "translated_text": translatedStr
    }), 200
