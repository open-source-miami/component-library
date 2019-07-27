import * as React from "react"
import { storiesOf } from "@storybook/react"
import Typography from "."
import TypographyReadme from "./README.md"

storiesOf("Typography", module)
  .addParameters({
    readme: {
      content: TypographyReadme,
      codeTheme: "atom-dark"
    }
  })
  .add("Text", () => (
    <div>
      <Typography variant="h1" fontFamily="Notable">
        H1: Heading h1
      </Typography>
      <Typography variant="h2" fontFamily="Notable">
        H2: Heading h2
      </Typography>
      <Typography variant="h3" fontFamily="Roboto">
        H3: Heading h3
      </Typography>
      <Typography variant="h4" fontFamily="Roboto">
        H4: Heading h4
      </Typography>
      <Typography variant="h5" fontFamily="Roboto">
        H5: Heading h5
      </Typography>
      <Typography variant="h6" fontFamily="Roboto">
        H6: Heading h6
      </Typography>
      <Typography variant="p" fontFamily="Roboto">
        P: Paragraph p
      </Typography>
    </div>
  ))
