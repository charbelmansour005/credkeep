import { render, screen } from "@testing-library/react"
import Header from "modules/register/components/header/Header"

describe("Register Header", () => {
  test("should render", () => {
    render(<Header />)
    const header = screen.getByText(
      /Protect your digital identity with Credkeep./
    )
    expect(header).toBeInTheDocument()
  })
})
