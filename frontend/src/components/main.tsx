import { Box, Input, Button, Spinner } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { css } from "@emotion/react";
import { FilePicker } from "./file-picker";
import { useFile, useSetGeneratedViewerMode } from "@/store";
import { FileTextViewer, GeneratedTextViewer } from "./file-text-viewer";

const MainBox = (props: any) => {
  return (
    <Box 
      bgColor="white"
      border='1px'
      borderColor="black"
      rounded='md'
      boxShadow='dark-lg'
      overflow="hidden"
      width="40%"
      height="80%"
    >
      {props.scroll ? (
        <Box
          width="full"
          height="full"
          overflow="scroll"
        >
          {props.children}
        </Box>
      ) : (
        <>
          {props.children}
        </>
      )}
    </Box>
  )
}

const SpinnerBox = () => {
  return (
    <Box 
      width="full"
      height="full"
      bgColor="blackAlpha.200"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness='4px'
        speed='0.65s'
        size='xl'
      />
    </Box>
  )
}

export function Main() {
  const file = useFile()
  const setGeneratedViewerMode = useSetGeneratedViewerMode()
   
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
      {file === null ? (
        <MainBox>
          <FilePicker/>
        </MainBox>
      ) : (
        <Suspense fallback={
          <MainBox>
            <SpinnerBox />
          </MainBox>
        }>
          <MainBox scroll>
            <FileTextViewer/>
          </MainBox>
        </Suspense>
      )}
      <Box>
        <Button margin={4} onClick={() => {
          setGeneratedViewerMode("summarize")
        }}>
          要約
        </Button>
        <br />
        <Button margin={4} onClick={() => {
          setGeneratedViewerMode("translate")
        }}>
          翻訳
        </Button>
      </Box>
      {(
        <Suspense fallback={
          <MainBox>
            <SpinnerBox />
          </MainBox>
        }>
          <MainBox scroll>
            <GeneratedTextViewer />
          </MainBox>
        </Suspense>
      )}
    </Box>
  );
}
