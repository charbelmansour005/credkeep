import { render, screen } from "test-utils"
import Register from "./Register"
import user from "@testing-library/user-event"

describe("Register", () => {
  test("should render divs & boxes", () => {
    render(<Register />)
    const form = screen.getByTestId("form-box")
    expect(form).toBeInTheDocument()

    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument()

    const outerBox = screen.getByTestId("outer-box")
    expect(outerBox).toBeInTheDocument()

    const innerBox = screen.getByTestId("inner-box")
    expect(innerBox).toBeInTheDocument()
  })

  test("elements exist and ", () => {
    render(<Register />)
    const emailTextinput = screen.getByLabelText("Email")
    expect(emailTextinput).toBeInTheDocument()
    const firstnameTextinput = screen.getByLabelText("First name")
    expect(firstnameTextinput).toBeInTheDocument()
    const lastnameTextinput = screen.getByLabelText("Last name")
    expect(lastnameTextinput).toBeInTheDocument()
    const phoneTextinput = screen.getByLabelText("Phone number")
    expect(phoneTextinput).toBeInTheDocument()
    const passwordTextinput = screen.getByLabelText("Password")
    expect(passwordTextinput).toBeInTheDocument()
    const hidePassButton = screen.getByTestId("hidePassButton")
    expect(hidePassButton).toBeInTheDocument()
    const registerButton = screen.getByRole("button", { name: "Register" })
    expect(registerButton).toBeInTheDocument()
    const loginButton = screen.getByRole("button", {
      name: "I already have an account",
    })
    expect(loginButton).toBeInTheDocument()
  })

  test("elements are focused in the right order", async () => {
    user.setup()
    render(<Register />)
    const emailTextinput = screen.getByLabelText("Email")
    const firstnameTextinput = screen.getByLabelText("First name")
    const lastnameTextinput = screen.getByLabelText("Last name")
    const phoneTextinput = screen.getByLabelText("Phone number")
    const passwordTextinput = screen.getByLabelText("Password")
    const hidePassButton = screen.getByTestId("hidePassButton")
    const registerButton = screen.getByRole("button", { name: "Register" })
    const loginButton = screen.getByRole("button", {
      name: "I already have an account",
    })
    await user.tab()
    expect(emailTextinput).toHaveFocus()
    await user.tab()
    expect(firstnameTextinput).toHaveFocus()
    await user.tab()
    expect(lastnameTextinput).toHaveFocus()
    await user.tab()
    expect(phoneTextinput).toHaveFocus()
    await user.tab()
    expect(passwordTextinput).toHaveFocus()
    await user.tab()
    expect(hidePassButton).toHaveFocus()
    await user.tab()
    expect(registerButton).toHaveFocus()
    await user.tab()
    expect(loginButton).toHaveFocus()
  })

  test("hide password icon is eventually displayed", () => {
    render(<Register />)
    const visibilityOffIcon = screen.findByTestId("VisibilityOffIcon")
    expect(visibilityOffIcon).toBeInTheDocument()

    const visibilityIcon = screen.queryByTestId("VisibilityIcon")
    expect(visibilityIcon).toBeInTheDocument()
  })
})
