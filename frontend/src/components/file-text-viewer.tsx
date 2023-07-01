import { useFileText } from "@/store"

export const FileTextViewer = () => {
  const fileText = useFileText()
  return (
    <div>
      {fileText?.data ?? ""}
    </div>
  )
}