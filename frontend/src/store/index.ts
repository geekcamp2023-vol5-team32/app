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

    const res = await api.post("/convert", form)

    return res.data
  }
})

export function useFileText() {
  return useRecoilValue(fileTextState)
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