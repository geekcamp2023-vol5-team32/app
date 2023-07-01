import { useCallback } from "react"
import { DropEvent, FileRejection, useDropzone } from "react-dropzone"
import { useSetFile } from "@/store"

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
    <div {...props} {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>ファイルをドロップしてください。</p> :
          <p>ドラック & ドロップ または クリックをしてファイルをアップロードしてください。</p>
      }
    </div>
  )
}