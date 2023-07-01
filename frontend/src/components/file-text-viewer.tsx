import { useFileText, useGeneratedViewerMode } from "@/store"

export const FileTextViewer = () => {
  const fileText = useFileText()
  return (
    <div>
      {fileText ?? ""}
    </div>
  )
}

export const SummarizeTextViewer = () => {
  const fileText = null
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
  } else {
    return null
  }
}

