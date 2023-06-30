import { Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { css } from "@emotion/react";

export function Main() {
  const [leftInputValue, setLeftInputValue] = useState("")
  const [rightInputValue, setRightInputValue] = useState("")

  const handleClickCopyButton = () => {
      navigator.clipboard.writeText(rightInputValue);
    }
  
  return (
    <Box
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F2F2F2;
        height: 84vh;
      `}
    >
      <Input
        css={css`
          width: 40%;
          height: 75%;
          border-radius: 7px;
          border: 1px solid #000;
          background: #FFF;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          margin-right: 3%;
        `}
        value={leftInputValue}
        onChange={e => setLeftInputValue(e.target.value)}
      />
      <Box position="relative" width="40%" height="75%">
        <Input
          css={css`
            width: 100%;
            height: 100%;
            border-radius: 7px;
            border: 1px solid #000;
            background: #FFF;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          `}
          value={rightInputValue}
          onChange={e => setRightInputValue(e.target.value)}
        />    
        <Button
          position="absolute"
          right="10px"
          bottom="10px"
          transform="translateY(-50%)"
          onClick={handleClickCopyButton}
        >
          Copy
        </Button>
      </Box>
    </Box>
  );
}
