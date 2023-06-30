import json

from flask import Blueprint, jsonify, request
from utils.interpreter import Writer

chatGPT_module = Blueprint("gpt_route", __name__)

@chatGPT_module.route("/translate", methods=['POST'])
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

@chatGPT_module.route("/summarize", methods=['POST'])
def summarize_text():
    data = request.get_data().decode("utf-8", "ignore")
    data_dict = json.loads(data)

    original_str = data_dict['original_text']

    writer = Writer(original_str)
    summarized_str = writer.summarizerGPT()

    return jsonify({
        "summarized_text": summarized_str
    }), 200