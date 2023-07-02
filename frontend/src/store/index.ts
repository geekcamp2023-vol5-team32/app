import { api } from "@/lib/api";
import { atom, selector, useRecoilValue, useSetRecoilState, useRecoilValueLoadable } from "recoil";

const fileState = atom<File | null>({
  key: "FileState",
  default: null,
})

export function useFile() {
  return useRecoilValue(fileState)
}

export function useSetFile() {
  return useSetRecoilState(fileState)
}

const fileTextState = selector<string | null>({
  key: "FileText",
  async get({ get }) {
    const file = get(fileState)

    if (file === null) {
      return null
    }

    const form = new FormData()
    form.append('file', file)

    const res = await api.post("/convert", form).catch(err => {
      console.error(err)
      window.alert("ファイルの変換に失敗しました")
      location.reload()
      throw err
    })

    return res.data
  }
})

export function useFileText() {
  return useRecoilValue(fileTextState)
}

export function useFileTextLoadable() {
  return useRecoilValueLoadable(fileTextState)
}

const summarizedFileTextState = selector<string | null>({
  key: "SummarizedFileTextState",
  async get({ get }) {
    const fileText = get(fileTextState)

    if (fileText === null) {
      return null
    }

    const res = await api.post("/summarize", {
      original_text: fileText,
    }).catch(err => {
      console.error(err)
      window.alert("ファイルの要約に失敗しました")
      location.reload()
      throw err
    })

    return res.data.summarized_text
  }
})

export function useSummarizedFileText() {
  return useRecoilValue(summarizedFileTextState)
}

const tlanslatedFileTextState = selector<string | null>({
  key: "TlanslatedFileTextState",
  async get({ get }) {
    const fileText = get(fileTextState)

    if (fileText === null) {
      return null
    }

    const res = await api.post("/translate", {
      original_text: fileText,
    }).catch(err => {
      console.error(err)
      window.alert("ファイルの翻訳に失敗しました")
      location.reload()
      throw err
    })

    return res.data.translated_text
  }
})

export function useTlanslatedFileText() {
  return useRecoilValue(tlanslatedFileTextState)
}

const generatedViewerModeState = atom<"summarize" | "translate" | null>({
  key: "GeneratedViewerMode",
  default: null
})

export function useGeneratedViewerMode() {
  return useRecoilValue(generatedViewerModeState)
}

export function useSetGeneratedViewerMode() {
  return useSetRecoilState(generatedViewerModeState)
}