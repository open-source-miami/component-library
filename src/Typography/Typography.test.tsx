import * as React from "react"
import { Typography } from "index"

it("Typography snapshot", () => {
  expect(<Typography variant="h1">Alex</Typography>).toMatchSnapshot()
})
