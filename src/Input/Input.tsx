import * as React from "react"
import styled from "styled-components"
import {
  PositionProps,
  SpaceProps,
  BorderProps,
  color,
  space,
  position,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  FontFamilyProps,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  DisplayProps,
  display,
  border,
  borderRadius,
  compose
} from "styled-system"

// TODO: add Input component tests
interface FontProps
  extends FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    FontFamilyProps {}

type TInput = BorderProps &
  PositionProps &
  SpaceProps &
  FontProps &
  DisplayProps &
  React.HTMLAttributes<HTMLInputElement>

const fontStyles = compose(
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle
)

const StyledInput = styled.input<TInput>`
  outline: none;
  border: none;
  border-bottom: 2px solid #000;
  ${color}
  ${space}
  ${position}
  ${fontStyles}
  ${display}
  ${border}
  ${borderRadius}
`

const StyledLabel = styled.label<FontProps>`
  display: block;
  ${fontStyles}
`

const InputLabel: React.FC<FontProps> = ({
  children,
  ...props
}: React.PropsWithChildren<FontProps>) => {
  return <StyledLabel {...props}>{children}</StyledLabel>
}
InputLabel.displayName = "InputLabel"
interface InputComposition {
  Label: React.FC<FontProps>
}

const Input: React.FC<TInput> & InputComposition = (props: TInput) => {
  return <StyledInput {...props} />
}
Input.Label = InputLabel

Input.displayName = "Input"

export default Input
