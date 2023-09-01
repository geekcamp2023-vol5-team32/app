import { 
  useFileText, useGeneratedViewerMode,
  useSummarizedFileText, useTlanslatedFileText,
  resultStreamState
} from "@/store"
import { useRecoilState } from 'recoil';
import { ReactNode, useState, useEffect } from "react"
import { Box, Button, useClipboard } from "@chakra-ui/react"
import { api } from "@/lib/api";

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

  const [resultStream, setResultStream] = useRecoilState(resultStreamState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.post("/summarizeStream", {
          original_text: fileText,
        })
        const stream = res.data.summarized_text;
        stream.on('data', (data:string) => {
          setResultStream(resultStream + data);
        });
        stream.on('end', () => {
          console.log("stream finished")
        });
      } catch (error) {
        console.error(error);
        window.alert("ファイルの要約に失敗しました");
        location.reload();
      }
    };
    fetchData();
  }, [setResultStream]);

  return (
    <TextViewer>
      {resultStream}
      <CopyButton text={resultStream!} />
    </TextViewer>
  )
}

export const TranslateTextViewer = () => {
  const fileText = useTlanslatedFileText()
  return (
    <TextViewer>
      {fileText}
      <CopyButton text={fileText!} />
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
