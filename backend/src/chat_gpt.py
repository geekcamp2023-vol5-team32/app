import openai
from dotenv import load_dotenv
import os

load_dotenv(verbose=True)
openai.api_key = os.getenv("OPENAI_API_KEY")

class Rewriter():
    def __init__(self, original_text:str):
        self.original_text = original_text
        self.modelOfChatGPT = "gpt-3.5-turbo"

    def __repr__(self):
        return '\n'.join([
            f'Original text: {self.original_text}',
            f'ChatGPT mode: {self.modelOfChatGPT}',
        ])
    
    def __callChatGPT(self, msgs:list) -> str:
        gptRepr = openai.ChatCompletion.create(model=self.modelOfChatGPT, messages = msgs)
        extractRepr = lambda repr: repr["choices"][0]["message"]["content"]
        return extractRepr(gptRepr)    
   
    def translatorGPT(self,) -> str:
        translatorRoleMsg = [
            {"role": "system", "content": "貴方は与えられたテキストを翻訳しなければならない。"},
        ]
        
        
        return self.__callChatGPT(msg)

    def summarizerGPT(self,) -> str:
        summarizerRoleMsg = [
            {"role": "system", "content": "貴方は与えられたテキストを要約しなければならない。"},
        ] 
        
        return self.__callChatGPT(msg)
    
# if __name__=="__main__":
#     a = callChatGPT("こんにちは", "/home/voicevox_hackthon/voicevox_chat_backend/chat/role_text/zundamon.txt", [])