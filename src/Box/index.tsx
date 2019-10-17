import styled from "styled-components"
import {
  space,
  color,
  flex,
  width,
  borderRadius,
  display,
  height,
  flexBasis,
  flexDirection,
  flexWrap,
  maxWidth,
  border,
  FlexBasisProps,
  BorderRadiusProps,
  FlexDirectionProps,
  FlexWrapProps,
  MaxWidthProps,
  SpaceProps,
  ColorProps,
  FlexProps,
  WidthProps,
  BorderProps,
  HeightProps,
  compose
} from "styled-system"

export type BoxProps = SpaceProps &
  FlexProps &
  HeightProps &
  ColorProps &
  WidthProps &
  MaxWidthProps &
  BorderProps &
  FlexBasisProps &
  FlexWrapProps &
  BorderRadiusProps &
  FlexDirectionProps & { boxSizing?: string }

const layout = compose(
  space,
  display,
  width,
  height,
  maxWidth,
  color
)

const Box = styled("div")<BoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  width,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  border,
  borderRadius,
  layout
)

export { Box }
