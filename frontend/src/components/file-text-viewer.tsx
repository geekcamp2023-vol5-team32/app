import { useFileText, useGeneratedViewerMode, useSummarizedFileText, useTlanslatedFileText } from "@/store"

export const FileTextViewer = () => {
  const fileText = useFileText()
  return (
    <div>
      {fileText ?? ""}
    </div>
  )
}

export const SummarizeTextViewer = () => {
  const fileText = useSummarizedFileText()
  return (
    <div>
      {fileText ?? ""}
    </div>
  )
}

export const TranslateTextViewer = () => {
  const fileText = useTlanslatedFileText()
  return (
    <div>
      {fileText ?? ""}
    </div>
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

