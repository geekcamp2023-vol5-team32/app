import json

from flask import Blueprint, jsonify, request
from utils.interpreter import Writer, linguist

chatGPT_module = Blueprint("gpt_route", __name__)

@chatGPT_module.route("/translate", methods=['POST'])
def translate_text():
    data = request.get_data().decode("utf-8", "ignore")
    data_dict = json.loads(data)

    original_str = data_dict['original_text'] 

    original_str_language_codes = linguist(original_str)

    target_lang = "英語" if original_str_language_codes == "ja" else "日本語"


    writer = Writer(original_str)
    try:
        translated_str = writer.translatorGPT(target_lang=target_lang)
    except:
        messege = 'An error occurred during translating'
        return jsonify(messege), 400

    return jsonify({
        "language": target_lang,
        "translated_text": translated_str
    }), 200

@chatGPT_module.route("/summarize", methods=['POST'])
def summarize_text():
    data = request.get_data().decode("utf-8", "ignore")
    data_dict = json.loads(data)

    original_str = data_dict['original_text']

    writer = Writer(original_str)
    try:
        summarized_str = writer.summarizerGPT()
    except:
        messege = 'An error occurred during summarizing'
        return jsonify(messege), 400
    
    return jsonify({
        "summarized_text": summarized_str
    }), 200