import { render, screen, waitFor } from "test-utils"
import Register from "./Register"
import user from "@testing-library/user-event"

describe("Register", () => {
  jest.setTimeout(30000)
  test("should render divs & boxes", () => {
    render(<Register />)
    const form = screen.getByTestId("form-box")
    expect(form).toBeInTheDocument()

    const outerBox = screen.getByTestId("outer-box")
    expect(outerBox).toBeInTheDocument()

    const innerBox = screen.getByTestId("inner-box")
    expect(innerBox).toBeInTheDocument()
  })

  test("elements exist and are focused in the right order", async () => {
    user.setup()
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

    await user.tab()

    await waitFor(() => {
      expect(emailTextinput).toHaveFocus()
    })
    await user.type(emailTextinput, "test@example.com")
    await user.tab()
    await waitFor(() => {
      expect(firstnameTextinput).toHaveFocus()
    })
    await user.type(firstnameTextinput, "charbel")
    await user.tab()
    await waitFor(() => {
      expect(lastnameTextinput).toHaveFocus()
    })
    await user.type(lastnameTextinput, "mansour")
    await user.tab()
    await waitFor(() => {
      expect(phoneTextinput).toHaveFocus()
    })
    await user.type(phoneTextinput, "71032883")
    await user.tab()
    await waitFor(() => {
      expect(passwordTextinput).toHaveFocus()
    })
    await user.type(passwordTextinput, "Test123!@#")
    await user.tab()
    await waitFor(() => {
      expect(hidePassButton).toHaveFocus()
    })
    await user.tab()
  })
})
