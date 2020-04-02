import styled from "styled-components"
import {
  PositionProps,
  compose,
  position,
  bottom,
  top,
  left,
  right
} from "styled-system"
import Box from "../Box"
import { Card, bgAndBorders } from "."

export type CardContent = Card & PositionProps

const content = compose(
  position,
  top,
  left,
  right,
  bottom,
  bgAndBorders
)

const CardContent = styled(Box)<CardContent>`
  padding: 0.5rem;
  ${content}
`
export default CardContent
