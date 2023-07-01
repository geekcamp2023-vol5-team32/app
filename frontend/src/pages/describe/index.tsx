import { Box, Image } from "@chakra-ui/react";

import { css } from "@emotion/react";
import { Header } from "../../../components/header";

export default function Page() {
  return (
    <>
      <Header />
      <Box
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url(/liscript/img/bg-image.png);
          height: 86vh;
          @media (max-width: 768px) {
            height: 100%;
          }
        `}
      >
        <Box
          css={css`
            width: 90%;
            height: 70%;
            @media (max-width: 768px) {
              margin: 20px 0;
              height: 100vh;
            }
          `}
        >
          <Box
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: -25px;
              margin-bottom: 20px;
              @media (max-width: 768px) {
                margin: 20px 0;
              }
            `}
          >
            <Image
              src="/liscript/img/icon.png"
              css={css`
                width: 120px;
                height: 14vh;
                flex-shrink: 0;
                @media (max-width: 768px) {
                  width: 85px;
                  height: 10vh;
                }
              `}
            ></Image>
            <Box
              css={css`
                color: #07cc2a;
                font-size: 55px;
                font-weight: 900;
                @media (max-width: 768px) {
                  font-size: 42px;
                }
              `}
            >
              Liscript
            </Box>
            <Box
              css={css`
                color: #fff;
                font-size: 40px;
                font-weight: 900;
                margin-left: 6px;
                margin-top: 18px;
                @media (max-width: 768px) {
                  font-size: 30px;
                }
              `}
            >
              とは
            </Box>
          </Box>
          <Box
            css={css`
              color: #fff;
              font-size: 45px;
              font-weight: 900;
              display: flex;
              align-items: center;
              justify-content: center;
              @media (max-width: 768px) {
                font-size: 27px;
              }
            `}
          >
            Listen(聞く) × script(文)
          </Box>

          <Box
            css={css`
              color: #fff;
              font-size: 32px;
              font-weight: 900;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 5%;
              @media (max-width: 768px) {
                display: none;
              }
            `}
          >
            音ありファイルをupload → 音声をテキスト化 → 要約・翻訳の可視化
          </Box>
          <Box
            css={css`
              display: none;
              @media (max-width: 768px) {
                color: #fff;
                font-size: 24px;
                font-weight: 900;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 15%;
                text-align: center;
              }
            `}
          >
            音ありファイルをupload <br />↓ <br />
            音声をテキスト化
            <br /> ↓ <br />
            要約・翻訳の可視化
          </Box>
          <Box
            css={css`
              color: #fff;
              font-size: 30px;
              font-weight: 900;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 3%;
              @media (max-width: 768px) {
                display: none;
              }
            `}
          >
            例:) ミーティング議事録、講義内容、面接練習、Vtube海外音声
          </Box>
          <Box
            css={css`
              display: none;
              @media (max-width: 768px) {
                color: #fff;
                font-size: 25px;
                font-weight: 900;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 15%;
              }
            `}
          >
            例:)
            <br />
            ミーティング議事録
            <br />
            講義内容
            <br />
            面接練習
            <br />
            Vtube海外音声
          </Box>
        </Box>
      </Box>
    </>
  );
}
