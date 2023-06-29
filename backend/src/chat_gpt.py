import openai
from dotenv import load_dotenv
import os

load_dotenv(verbose=True)
openai.api_key = os.getenv("OPENAI_API_KEY")

class Writer():
    def __init__(self, original_text:str):
        self.original_text = original_text
        self.modelOfChatGPT = "gpt-3.5-turbo"

        self.givenMsg = {
            "role": "user", "content": self.original_text
        }        

    def __repr__(self):
        return '\n'.join([
            f'Original text: {self.original_text}',
            f'ChatGPT mode: {self.modelOfChatGPT}',
        ])
    
    def __callChatGPT(self, msgs:list) -> str:
        gptRepr = openai.ChatCompletion.create(model=self.modelOfChatGPT, messages = msgs)
        extractRepr = lambda repr: repr["choices"][0]["message"]["content"]
        return extractRepr(gptRepr)    
   
    def translatorGPT(self, targetLang="") -> str:
        languageOrder = F"{targetLang}に" if targetLang!="" else ""
        translatorRoleMsg = {
            "role": "system",
            "content": F"あなたは与えられたテキストを{languageOrder}翻訳しなければならない。"
        }
        msg = [translatorRoleMsg, self.givenMsg]
        gptAnswer = self.__callChatGPT(msg)
        return gptAnswer

    def summarizerGPT(self,) -> str:
        summarizerRoleMsg = {
            "role": "system",
            "content": "あなたは与えられたテキストを要約しなければならない。要約結果はそのまま出力する。"
        }
        msg = [summarizerRoleMsg, self.givenMsg]
        gptAnswer = self.__callChatGPT(msg)
        return gptAnswer
    
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
    
    rewriter = Writer(sampleText)
    # 翻訳を行う時
    result = rewriter.translatorGPT(targetLang="英語")
    print(result)

    # 要約を行うとき
    result = rewriter.summarizerGPT()
    print(result)
