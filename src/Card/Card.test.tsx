import * as React from "react"
import { cleanup, render } from "@testing-library/react"
import Card from "./Card"

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

  it("renders all subcomponents of the card", () => {
      const { getByText } = render(
          <Card>
              <Card.Header>
                  <Card.Title>Hello World</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Card.Text>
                      Body Text
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                  Footer
              </Card.Footer>
          </Card>
      )
      expect(getByText("Hello World")).toBeInTheDocument();
      expect(getByText("Body Text")).toBeInTheDocument();
      expect(getByText("Footer")).toBeInTheDocument();
  })

})

