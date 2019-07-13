import * as React from "react"
import styled from "styled-components"
import {
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  space,
  color,
  SpaceProps,
  ColorProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LetterSpacingProps,
  LineHeightProps,
  TextAlignProps,
  compose,
  FlexProps
} from "styled-system"

export type Typography = FlexProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps &
  LetterSpacingProps &
  LineHeightProps &
  TextAlignProps &
  SpaceProps &
  ColorProps

interface ITypography extends Typography {
  /**
   * React children
   */
  children: React.ReactNode
  /**
   * Text variants
   */
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  /**
   * Font family selection
   */
  fontFamily?: "Roboto" | "Notable"
}

const typography = compose(
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign
)

const returnStyled = (arg: string): any => styled[arg]

const Typography: React.FC<ITypography> = props => {
  const StyledTypography = returnStyled(props.variant)<ITypography>`
    ${color}
    ${typography}
    ${space}
    
    font-family: ${(p: ITypography) =>
      p.fontFamily === "Notable"
        ? "Notable, sans-serif"
        : "Roboto, sans-serif"};
    font-face: {
      src: @import ('/assets/fonts/Notable-Regular.ttf')
    }
    font-face: {
      src: @import ('/assets/fonts/Roboto-Regular.ttf')
    }
 `
  return (
    <StyledTypography fontFamily={props.fontFamily} {...props}>
      {props.children}
    </StyledTypography>
  )
}

export default Typography
