import json

from flask import Blueprint, jsonify, request, Response, stream_with_context
from utils.interpreter import Writer, linguist

chatGPT_module = Blueprint("gpt_route", __name__)

@chatGPT_module.route("/translate", methods=['POST'])
def translate_text():
    data = request.get_data().decode("utf-8", "ignore")
    data_dict = json.loads(data)

    original_str = data_dict['original_text']
    try:
        target_lang = data_dict['target_language']
    except:
        target_lang = ""
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

@chatGPT_module.route("/translateStream", methods=['GET', 'POST'])
def translate_text_stream():
    if request.method == 'POST':
        data = request.get_data().decode("utf-8", "ignore")
        data_dict = json.loads(data)

        original_str = data_dict['original_text']
        try:
            target_lang = data_dict['target_language']
        except:
            target_lang = ""

        writer = Writer(original_str)
        try:
            translated_gen = writer.translatorGPT(target_lang=target_lang, stream=True)
            return Response(stream_with_context(translated_gen), content_type='text/event-stream'), 200

        except:
            messege = 'An error occurred during translating'
            return jsonify(messege), 400

    else:
        writer = Writer("Red sky at night, sailors' delight.Red sky at morning, sailors take warning.")
        try:
            translated_gen = writer.translatorGPT(target_lang="ja", stream=True)
            return Response(stream_with_context(translated_gen), content_type='text/event-stream'), 200
        except:
            messege = 'An error occurred during translating'
            return jsonify(messege), 400

@chatGPT_module.route("/summarizeStream", methods=['GET', 'POST'])
def summarize_text_stream():
    if request.method == 'POST':
        data = request.get_data().decode("utf-8", "ignore")
        data_dict = json.loads(data)

        original_str = data_dict['original_text']

        writer = Writer(original_str)
        try:
            summarized_gen = writer.summarizerGPT(stream=True)
            return Response(stream_with_context(summarized_gen), content_type='text/event-stream'), 200

        except:
            messege = 'An error occurred during summarizing'
            return jsonify(messege), 400
    else:
        writer = Writer("回りくどい文章は多くの場合、文末に余計な表現が入ることで生じるようです。逆にいえば、文末表現に気を付けることで冗長表現の大部分は防げるということになります。ただ、そのためには冗長な文末表現とはどのようなものかを知ることが大切だと考えられます。たとえば、以下は冗長な文章の典型例だといえるでしょう")
        try:
            summarized_gen = writer.summarizerGPT(stream=True)
            return Response(stream_with_context(summarized_gen), content_type='text/event-stream'), 200
        except:
            messege = 'An error occurred during translating'
            return jsonify(messege), 400