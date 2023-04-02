import axios from "axios"
import { registerURL } from "api/API"

export const register = async (
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  password: string
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
