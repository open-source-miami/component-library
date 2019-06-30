import * as React from "react"
import { render, cleanup } from "@testing-library/react"
import Card from "./Card.component"

afterEach(cleanup)
describe("Card Component Test", () => {
  test("renders", () => {
    render(<Card />)
  })

  test("HTML attributes are added properly", () => {
    const { getByTestId } = render(<Card className="card1" />)
    expect(getByTestId("CardComponent").classList).toContain("card1")
  })

  test("Card Flip component doesnt allow more than 2 children", () => {
    expect(() => {
      render(
        <Card.Flipper>
          <Card>Card One Front</Card>
          <Card>Card One Back</Card>
          <Card>Card One Extra</Card>
        </Card.Flipper>
      )
    }).toThrowError(
      "<Card.Flipper> component must have 2 child <Card> components"
    )
  })
})
