import * as React from "react"
import { cleanup, render } from "@testing-library/react"
import Card from "./Card"
import CardContent from "./CardContent"

afterEach(cleanup)
describe("Card Component Test", () => {
  it("renders", () => {
    const { getByText } = render(<Card>Basic Card</Card>)
    expect(getByText("Basic Card")).toBeInTheDocument()
  })

  it("passes html props", () => {
    const { getByText } = render(<Card id="myCard">Card Component</Card>)

    expect(getByText("Card Component")).toHaveAttribute("id", "myCard")
  })

  it("renders with content", () => {
    const { getByText } = render(
      <Card>
        <CardContent>Card Content</CardContent>
      </Card>
    )
    expect(getByText("Card Content")).toBeInTheDocument()
  })

  it("passes html properties to content", () => {
    const { getByText } = render(
      <Card>
        <CardContent id="myCardContent">Card Content</CardContent>
      </Card>
    )

    expect(getByText("Card Content")).toHaveAttribute("id", "myCardContent")
  })
})
