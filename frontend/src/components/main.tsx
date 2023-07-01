import { Box, Input, Button } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { css } from "@emotion/react";
import { FilePicker } from "./file-picker";
import { useFile } from "@/store";
import { FileTextViewer } from "./file-text-viewer";

export function Main() {
  const file = useFile()
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
        background-image : url(/liscript/img/bg-image.png);
        height: 86vh;
        @media (max-width: 768px) {
         flex-direction: column;
          height: 100vh;
        }
      `}
    >
      <div css={css`
        width: 45%;
        height: 80%;
        border-radius: 7px;
        border: 1px solid #000;
        background: #FFF;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        margin-right: 3%;
        overflow: scroll;
        @media (max-width: 768px) {
          margin-right:0%;
          width:80%;
          margin:30px;
        }
      `}>
        {file === null ? (
          <FilePicker/>
        ) : (
          <Suspense fallback="loading">
            <FileTextViewer/>
          </Suspense>
        )}
      </div>
      <Box css={css`
            position:relative;
            width:45%;
            height:80%;
            @media (max-width: 768px) {
            margin-right:0%;
            width:80%;
            margin:10px;
          }
     `}>
        <Input
          css={css`
            width: 100%;
            height: 100%;
            border-radius: 7px;
            border: 1px solid #000;
            background: #FFF;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
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
