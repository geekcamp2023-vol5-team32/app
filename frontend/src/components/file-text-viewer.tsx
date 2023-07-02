import { useFileText, useGeneratedViewerMode, useSummarizedFileText, useTlanslatedFileText } from "@/store"
import { ReactNode, useState } from "react"
import { Box, Button, useClipboard } from "@chakra-ui/react"

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
  const fileText = useSummarizedFileText()
  return (
    <TextViewer>
      {fileText}
      <CopyButton text={fileText!} />
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
