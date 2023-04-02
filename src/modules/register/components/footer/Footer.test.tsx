import { render, screen } from "@testing-library/react"
import Footer from "modules/register/components/footer/Footer"

describe("Register Footer", () => {
  test("should render", () => {
    render(
      <Footer
        email="test@gmail.com"
        firstName="charbel"
        lastName="mansour"
        phoneNumber="12345678"
        password="Test123!@#"
      />
    )
    const registerButton = screen.getByRole("button", { name: "Register" })
    expect(registerButton).toBeInTheDocument()
    const loginButton = screen.getByRole("button", {
      name: "I already have an account",
    })
    expect(loginButton).toBeInTheDocument()
  })
})
