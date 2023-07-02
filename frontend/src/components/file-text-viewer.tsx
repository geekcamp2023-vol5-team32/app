import { useFileText, useGeneratedViewerMode, useSummarizedFileText, useTlanslatedFileText } from "@/store"
import { ReactNode } from "react"
import { Box } from "@chakra-ui/react"

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

