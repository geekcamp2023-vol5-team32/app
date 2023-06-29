import { Box, Image, Spacer} from "@chakra-ui/react"
import { css } from "@emotion/react";

export function Header() {
  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <Image src="./img/icon.png" css={css`
          width: 134px;
          height: 127px;
          flex-shrink: 0;
        `}></Image>
        <Box css={css`
          color: #000;
          font-size: 48px;
          font-family: Inter;
          font-weight: 900;
        `}>Liscript</Box>
        <Spacer></Spacer>
        <Image src="./img/menu.png" css={css`
        width: 109px;
        height: 107px;
        `}></Image>
      </Box>
    </>
  );
}