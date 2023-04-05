import { render, screen } from "@testing-library/react"
import HeaderLogo from "modules/register/components/header/HeaderLogo"

describe("Register Header", () => {
  test("should render", () => {
    render(<HeaderLogo />)
    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument()
  })
})
