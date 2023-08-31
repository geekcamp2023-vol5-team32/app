import { Box, Input, Button, Spinner } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { css } from "@emotion/react";
import { FilePicker } from "./file-picker";
import { SelectBox } from "./select-language-box";
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
      width={{ base: "90%", md: "40%" }}
      height="80%"
      position="relative"
    >
      {props.scroll ? (
        <Box
          width="full"
          height="full"
          overflowX="hidden"
          overflowY="scroll"
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
        background-image : url(/liscript/img/bg-image.png);
      `}
    >
      <SelectBox />
      <Box
        flexDirection={{ base: "column", md: "row" }}
        height={{ base: "120vh", md: "86vh" }}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ base: "row", md: "column" }}
        >
          <Button
            colorScheme="green"
            size="lg" 
            margin="4"
            boxShadow="dark-lg"
            onClick={() => {
              setGeneratedViewerMode("summarize")
            }}
          >
            要約
          </Button>
          <Button
            colorScheme="blue" 
            size="lg" 
            margin="4"
            boxShadow="dark-lg"
            onClick={() => {
              setGeneratedViewerMode("translate")
            }}
          >
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
    </Box>
  );
}
