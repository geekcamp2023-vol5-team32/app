import { useCallback } from "react"
import { DropEvent, FileRejection, useDropzone } from "react-dropzone"
import { useSetFile } from "@/store"
import { Box } from "@chakra-ui/react"

export type FilePickerProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {

}

export const FilePicker = (props: FilePickerProps) => {
  const setFile = useSetFile()

  const onDrop = useCallback(((
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => {
    console.log(acceptedFiles, fileRejections, event)
    setFile(acceptedFiles[0] ?? null)
  }), [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Box 
      {...props} 
      {...getRootProps()} 
      bgColor="blackAlpha.200"
      textColor="gray.700"
      width="full"
      height="full"
      >
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>ファイルをドロップしてください。</p> :
          <p>ドラック & ドロップ または クリックをしてファイルをアップロードしてください。</p>
      }
    </Box>
  )
}