import axios from "axios"
import { registerURL } from "api/API"

export const register = async (
  email: string | null,
  firstName: string | null,
  lastName: string | null,
  phoneNumber: string | null,
  password: string | null
) => {
  try {
    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: password,
    }
    const response = await axios.post(registerURL, data)
    console.log(response.data)
    // return response
  } catch (error) {
    console.log(error)
  }
}
