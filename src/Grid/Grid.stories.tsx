import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import GridReadme from "./README.md"

interface IBorder {
  borderColor: string
}

const StyledBox = styled(Box)<IBorder>`
  cursor: pointer;
  border: ${props => `1px solid ${props.borderColor}`};
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: lightgray;
  }
`
const renderGridBoxes = (): JSX.Element[] => {
  const boxes = []
  let i: number
  for (i = 0; i < 32; i += 1) {
    boxes.push(
      <StyledBox borderColor="gray" width={1 / 8} key={i}>
        Space {i}
      </StyledBox>
    )
  }

  return boxes
}

storiesOf("Grid", module)
  .addParameters({
    readme: {
      content: GridReadme,
      codeTheme: "atom-dark"
    }
  })
  .add("Grid", () => {
    return (
      <Flex flexWrap="wrap" justifyContent="center">
        {renderGridBoxes()}
      </Flex>
    )
  })

export default renderGridBoxes
