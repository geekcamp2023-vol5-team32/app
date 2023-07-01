import { useCallback } from "react"
import { DropEvent, FileRejection, useDropzone } from "react-dropzone"

export type FileUploaderProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {

}

export const FileUploader = (props: FileUploaderProps) => {
  const onDrop = useCallback(((
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => {
    console.log(acceptedFiles, fileRejections, event)
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