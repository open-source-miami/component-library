import styled from "styled-components"
import {
  BackgroundProps,
  compose,
  background,
  backgroundColor,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  backgroundImage,
  BorderProps,
  border,
  borderColor,
  borderBottom,
  borderRight,
  borderRadius,
  borderLeft,
  borderWidth,
  borderStyle,
  borderTop,
  borders
} from "styled-system"
import Box, { BoxProps } from "../Box"

export type Card = BoxProps & BackgroundProps & BorderProps

export const bgAndBorders = compose(
  background,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRight,
  borderRadius,
  borderWidth,
  borderStyle,
  borderTop,
  borders
)

const Card = styled(Box)<Card>`
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 5px;
  ${bgAndBorders}
`

Card.defaultProps = {
  width: [1, 1 / 2, 1 / 4]
}

export default Card
