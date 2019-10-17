import * as React from "react"
import styled, { StyledFunction } from "styled-components"
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

export interface ITypography extends Typography {
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
  fontFamily?: "Roboto" | "Notable" | "Mouse Memoirs"
}

const typography = compose(
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign
)

const returnStyled = (arg: string): StyledFunction<React.FC<ITypography>> =>
  styled[arg]

const returnFont = ({ fontFamily }: ITypography): string => {
  if (fontFamily) {
    if (fontFamily === "Notable") {
      return "Notable, sans-serif"
    }
    if (fontFamily === "Mouse Memoirs") {
      return "Mouse Memoirs, sans-serif"
    }
  }
  return "Roboto, sans-serif"
}

const Typography: React.FC<ITypography> = props => {
  const StyledTypography = returnStyled(props.variant)<ITypography>`
    ${color}
    ${typography}
    ${space}
    
    font-family: ${p => returnFont(p)};
    font-face: {
      src: @import ('/assets/fonts/Notable-Regular.ttf')
    }
    font-face: {
      src: @import ('/assets/fonts/Roboto-Regular.ttf')
    }
    font-face: {
      src: @import url('https://fonts.googleapis.com/css?family=Mouse+Memoirs&display=swap');
    }
 `
  return (
    <StyledTypography fontFamily={props.fontFamily} {...props}>
      {props.children}
    </StyledTypography>
  )
}

export default Typography
