import * as React from "react"
import { storiesOf } from "@storybook/react"
import Input from "./Input"
import Typography from "../Typography"

const stories = storiesOf("Input", module)

stories.add("Input", () => {
  return (
    <>
      <Typography variant="h2">Basic Input</Typography>
      <Input placeholder="Basic" fontSize="1.3rem" />

      <Typography variant="h2">Bordered Input</Typography>
      <Input
        placeholder="Basic"
        fontSize="1.3rem"
        border="2px solid #000"
        borderRadius="3px"
        padding="5px"
      />

      <Typography variant="h2">Labeled Input</Typography>
      <div>
        <Input.Label fontFamily="Roboto, sans-serif">First Name</Input.Label>
        <Input
          placeholder="Basic"
          fontSize="1.3rem"
          border="2px solid #000"
          borderRadius="3px"
          padding="5px"
        />
      </div>
    </>
  )
})
