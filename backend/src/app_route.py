import json

from chat_gpt import Writer
from flask import jsonify, request, Blueprint

translate_module = Blueprint("app_route", __name__)

@translate_module.route("/translate", methods=['POST'])
def translate_text():
    data = request.get_data().decode("utf-8", "ignore")
    data_dict = json.loads(data)

    original_str = data_dict['original_text'] 
    language = data_dict['language']

    writer = Writer(original_str)
    translated_str = writer.translatorGPT(target_lang=language)

    return jsonify({
        "language": language,
        "translated_text": translated_str
    }), 200
