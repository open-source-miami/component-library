import { addDecorator, configure } from "@storybook/react"
import { addReadme } from "storybook-readme"

addDecorator(addReadme)

const req = require.context("../src", true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
