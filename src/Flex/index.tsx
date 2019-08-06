import styled from "styled-components"
import {
  compose,
  justifyContent,
  alignItems,
  JustifyContentProps,
  AlignContentProps,
  AlignItemsProps,
  flexWrap,
  flexDirection,
  alignContent
} from "styled-system"
import Box, { BoxProps } from "../Box"

type Flex = BoxProps & JustifyContentProps & AlignContentProps & AlignItemsProps

const flexProps = compose(
  flexWrap,
  flexDirection,
  justifyContent,
  alignContent,
  alignItems
)

/**
 * Flex container
 */
const Flex = styled(Box)<Flex>`
  display: flex;
  ${flexProps};
`

export default Flex
