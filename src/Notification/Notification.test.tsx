import * as React from "react"
import { render } from "@testing-library/react"
import Notification from "./Notification.component"

describe("Notification", () => {
  test("renders", () => {
    const { getByText } = render(
      <Notification kind="normal">Normal notification</Notification>
    )
    expect(getByText("Normal notification")).toBeInTheDocument()
  })

  test("forward props to container", () => {
    const { getByText } = render(
      <Notification kind="normal" id="myAlert">
        Normal notification
      </Notification>
    )
    expect(getByText("Normal notification")).toHaveAttribute("id", "myAlert")
  })
})
