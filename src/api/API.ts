import axios from "axios"

const baseURL = "https://credential-keeping-backend-tc8y.onrender.com"

axios.defaults.baseURL = baseURL

axios.defaults.responseType = "json"

export const registerURL = "/api/auth/register"
