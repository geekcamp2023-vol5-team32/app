import axios from "axios"

export const API_BASE_URL = "https://geekcamp2023-vol5-team32.web.app/liscript/api"

export const api = axios.create({
  baseURL: API_BASE_URL
})
