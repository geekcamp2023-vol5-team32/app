import openai
from dotenv import load_dotenv

import os

load_dotenv(verbose=True)
openai.api_key = os.getenv("OPENAI_API_KEY")

a = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)

b = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "あなたは役に立つアシスタントです"}, # 製作者によるキャラ付け
        {"role": "user", "content": "2020年のワールドシリーズを制したのは？"}, # ユーザーの質問
        {"role": "assistant", "content": "2020年、ロサンゼルス・ドジャースがワールドシリーズを制覇。"}, # 製作者による前提情報の提示
        {"role": "user", "content": "どこでプレーされたのですか？"} # ユーザーの質問
    ]
)

print("pass")