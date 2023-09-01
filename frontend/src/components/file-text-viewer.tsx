import { useFileText, useGeneratedViewerMode, useTargetLanguage } from "@/store"
import { ReactNode, useState, useEffect } from "react"
import { Box, Button, useClipboard } from "@chakra-ui/react"
import { API_BASE_URL } from "@/lib/api";

const CopyButton = (props: { text: string }) => {
  const { onCopy } = useClipboard(props.text)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    onCopy()
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <Button
      onClick={handleCopy}
      position="absolute"
      bottom="8px"
      right="24px"
      zIndex="1"
    >
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  )
}

const TextViewer = (props: { children: ReactNode }) => {
  return (
    <Box
      color="gray.900"
      pt="3%"
      pb="3%"
      pl="3%"
      pr="2%"
    >
      {props.children}
    </Box>
  )
}

export const FileTextViewer = () => {
  const fileText = useFileText()
  return (
    <TextViewer>
      {fileText}
      <CopyButton text={fileText!} />
    </TextViewer>
  )
}

export const SummarizeTextViewer = () => {
  const fileText = useFileText()

  const [resultStream, setResultStream] = useState("");
  const fileTextState  = useFileText();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fileTextState == null) {
          return
        }
        const res = await fetch(API_BASE_URL + "/summarizeStream", {
          method: "POST",
          body: JSON.stringify({
            original_text: fileText,
          })
        })
    
        const decoder = new TextDecoder()
        const reader = res.body!.getReader()
    
        const readChunk = ({done, value}: any) => {
          if(done) {
            return
          }
    
          setResultStream(result => result + decoder.decode(value))
          reader.read().then(readChunk)
        }
    
        reader.read().then(readChunk)
      }
      
      catch (error) {
        console.error(error);
        window.alert("ファイルの要約に失敗しました");
        location.reload();
      }
    };
    fetchData();
  }, [fileTextState]);

  return (
    <TextViewer>
      {resultStream}
      <CopyButton text={resultStream!} />
    </TextViewer>
  )
}

export const TranslateTextViewer = () => {
  const fileText = useFileText()
  const targetLanguage = useTargetLanguage()

  const [resultStream, setResultStream] = useState("");
  const fileTextState  = useFileText();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fileText === null) {
          return null
        }
    
        const res = await fetch(API_BASE_URL + "/translateStream", {
          method: "POST",
          body: JSON.stringify({
            original_text: fileText,
            target_language: targetLanguage
          })
        })
    
        const decoder = new TextDecoder()
        const reader = res.body!.getReader()
    
        const readChunk = ({done, value}: any) => {
          if(done) {
            return
          }
    
          setResultStream(result => result + decoder.decode(value))
          reader.read().then(readChunk)
        }
    
        reader.read().then(readChunk)
      }
      
      catch (error) {
        console.error(error);
        window.alert("ファイルの要約に失敗しました");
        location.reload();
      }
    };
    fetchData();
  }, [fileTextState]);

  return (
    <TextViewer>
      {resultStream}
      <CopyButton text={resultStream!} />
    </TextViewer>
  )
}

export const GeneratedTextViewer = () => {
  const mode = useGeneratedViewerMode()

  if (mode === "summarize") {
    return (
      <SummarizeTextViewer />
    )
  } else if (mode === "translate") {
    return (
      <TranslateTextViewer />
    )
  } else {
    return null
  }
}
