import { useCallback } from "react"
import { DropEvent, FileRejection, useDropzone } from "react-dropzone"
import { useSetFile } from "@/store"
import { Box, Button, Image, Text } from "@chakra-ui/react"

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
      width="full"
      height="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        {...props}
        {...getRootProps()}
        bgColor="blackAlpha.200"
        textColor="gray.700"
        width="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        flexGrow="1"
      >
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p>ファイルをドロップしてください。</p>
          ) : (
            <>
              <svg fill="gray">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.68 7.35 7.38 5.73 9.07 4.1 11 4.1 11.83 4.1 12.41 4.69 13 5.28 13 6.1V12.15L14.6 10.6L16 12L12 16L8 12L9.4 10.6L11 12.15V6.1Q9.1 6.45 8.05 7.94 7 9.43 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 9.8 16.45 8.76 15.9 7.73 15 7V4.68Q16.85 5.55 17.93 7.26 19 9 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M12 11.05Z" /></svg>
              </svg>
              <Text textAlign="center" fontSize={{ base: "sm", lg: "2xl"}} >ドラック & ドロップで<br />ファイルをアップロード</Text>
              <Text fontSize="2xl">or</Text>
              <Text textAlign="center"  fontSize={{ base: "sm", lg: "2xl"}} mb="16">クリックしてアップロードする<br />ファイルを選択</Text>
            </>
          )
        }
      </Box>
      <Box
        bgColor="blackAlpha.200"
        textColor="gray.700"
        width="full"
        padding="4"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        flexGrow="0"
        borderTop="1px"
      >
        <Button colorScheme="blackAlpha" onClick={() => {
          open("https://drive.google.com/drive/folders/1ufRbg96WuIJFKy-zagCV2_ytUKKNH4CG?usp=sharing")
        }}>
          サンプルファイルをダウンロード
        </Button>
      </Box>
    </Box>
  )
}