import * as React from "react"
import { render } from "@testing-library/react"
import SampleComponent from "./SampleComponent.component"

describe("Sample Component", () => {
  test("renders", () => {
    const component = render(<SampleComponent />)
    expect(component.getByText("Submit")).toBeInTheDocument()
  })
})
