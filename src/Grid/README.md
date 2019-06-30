
<h1>Usage</h1>

```jsx
import * as React from "react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"

interface IBorder {
  borderColor: string
}

const StyledBox = styled(Box)<IBorder>`
  cursor: pointer;
  border: ${props => `1px solid ${props.color}`};
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
      <StyledBox color="gray" width={1 / 8} key={i}>
        Space {i}
      </StyledBox>
    )
  }

  return boxes
}

const Component = () => (
    <Flex flexWrap="wrap" justifyContent="center">
        {renderGridBoxes()}
    </Flex>
)

```