import * as React from "react"
import { storiesOf } from "@storybook/react"
import Sample from "./SampleComponent.component"

storiesOf("Sample", module).add("Sample button", () => {
  return <Sample />
})
