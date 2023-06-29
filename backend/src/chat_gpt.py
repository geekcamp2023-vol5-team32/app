import openai
from dotenv import load_dotenv
import os

load_dotenv(verbose=True)
openai.api_key = os.getenv("OPENAI_API_KEY")

class Writer():
    def __init__(self, original_text:str):
        self.original_text = original_text
        self.model_of_ChatGPT = "gpt-3.5-turbo"

        self.given_msg = {
            "role": "user", "content": self.original_text
        }        

    def __repr__(self):
        return '\n'.join([
            f'Original text: {self.original_text}',
            f'ChatGPT mode: {self.model_of_ChatGPT}',
        ])
    
    def __callChatGPT(self, msgs:list) -> str:
        gptRepr = openai.ChatCompletion.create(model=self.model_of_ChatGPT, messages = msgs)
        extractRepr = lambda repr: repr["choices"][0]["message"]["content"]
        return extractRepr(gptRepr)    
   
    def translatorGPT(self, target_lang="") -> str:
        language_order = F"{target_lang}" if target_lang!="" else "日本語"
        translator_role_msg = {
            "role": "system",
            "content": F"あなたは与えられたテキストを{language_order}に翻訳しなければならない。"
        }
        msg = [translator_role_msg, self.given_msg]
        gpt_answer = self.__callChatGPT(msg)
        return gpt_answer

    def summarizerGPT(self,) -> str:
        summarizer_role_msg = {
            "role": "system",
            "content": "あなたは与えられたテキストを要約しなければならない。要約結果はそのまま出力する。"
        }
        msg = [summarizer_role_msg, self.given_msg]
        gpt_answer = self.__callChatGPT(msg)
        return gpt_answer
    
if __name__=="__main__":
    sampleText = """
    書き残しておく必要がある。
    書いておかないとそのうち忘れてしまうだろうし、今日聞いたことは重要だと思うからだ。
    私にとって重要という意味ではない。
    私が、あるいは今日地球に生きる人たちがなにかをできるだけの時間は過ぎてしまった。
    でも、どこかのだれかがどうにかできるかもしれない。少なくともその助けくらいにはなるだろう。
    これをパイプに詰め、ロウで覆い、渓谷の奥底に投げるつもりだ。
    いつの日か、だれかがこれを読んで、考えをまとめるはずだ。それが許されるのなら。
    """.replace("\n","")
    
    writer = Writer(sampleText)
    # 翻訳を行う時
    result = writer.translatorGPT(target_lang="英語")
    print(result)

    # 要約を行うとき
    result = writer.summarizerGPT()
    print(result)
