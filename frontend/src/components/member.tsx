import { Box, Image } from "@chakra-ui/react";

import { css } from "@emotion/react";

export function Member( {name, role, company, twitter}: {name: string, role: string, company:string, twitter:string} ) {
  return (
    <Box
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        @media (max-width: 768px) {
          flex-direction: column;
          margin:24px 0;
        }
      `}
    >
      <div
        css={css`
          color: white;
          font-weight: bold;
          margin: 30px 15px;
          font-size: 25px;
          display: block;
          @media (max-width: 768px) {
            display: none;
          }
        `}
      >
        {name} {role} / {company}
      </div>
      <div
        css={css`
          display: none;
          @media (max-width: 768px) {
            display: block;
            color: white;
            margin: 20px;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 25px;
          }
        `}
      >
        {name}
        <br />
        {role}
        <br />
        {company}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          @media (max-width: 768px) {
            margin-top: -20px;
          }
        `}
      >
        <Image
          src="./img/twitter.png"
          css={css`
            width: 30px;
            height: 30px;
            border-radius: 5px;
            margin-right: 5px;
          `}
        />
        <a
          href={twitter}
          css={css`
            color: #1c9bef;
            font-size: 25px;
            font-weight: bold;
          `}
        >
          {twitter.replace("https://twitter.com/", "")}
        </a>
      </div>
    </Box>
  );
}
