import axios from "axios"

const baseURL = "http://localhost:3500"

axios.defaults.baseURL = baseURL

axios.defaults.responseType = "json"

export const registerURL = "/api/auth/register"
