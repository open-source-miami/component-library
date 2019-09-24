import styled from "styled-components"
import {
  PositionProps,
  compose,
  position,
  bottom,
  top,
  left,
  right,
  alignItems,
  justifySelf,
  justifyItems
} from "styled-system"
import Box, { BoxProps } from "../Box"

export type CardContent = PositionProps & BoxProps

const content = compose(
  position,
  top,
  left,
  right,
  bottom,
  alignItems,
  justifySelf,
  justifyItems
)

const CardContent = styled(Box)<CardContent>`
  ${content}
`
export default CardContent
