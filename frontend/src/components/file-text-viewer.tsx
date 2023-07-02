import { useFileText, useGeneratedViewerMode, useSummarizedFileText, useTlanslatedFileText } from "@/store"
import { ReactNode, useState } from "react"
import { Box, Button, useClipboard } from "@chakra-ui/react"

const TextViewer = (props: { children: ReactNode }) => {
  const { onCopy } = useClipboard(props.children.toString())
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <Box
      color="gray.900"
      pt="3%"
      pb="3%"
      pl="3%"
      pr="2%"
      position="relative"
    >
      <Button
        onClick={handleCopy}
        position="absolute"
        bottom="0"
        right="2%"
        zIndex="1"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
      {props.children}
    </Box>
  )
}

export const FileTextViewer = () => {
  const fileText = useFileText()
  return (
    <TextViewer>
      {fileText ?? ""}
    </TextViewer>
  )
}

export const SummarizeTextViewer = () => {
  const fileText = useSummarizedFileText()
  return (
    <TextViewer>
      {fileText ?? ""}
    </TextViewer>
  )
}

export const TranslateTextViewer = () => {
  const fileText = useTlanslatedFileText()
  return (
    <TextViewer>
      {fileText ?? ""}
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
