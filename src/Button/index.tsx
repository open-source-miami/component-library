import styled from "styled-components"
import {
  ButtonStyleProps,
  BorderProps,
  LayoutProps,
  BackgroundProps,
  compose,
  background,
  backgroundColor,
  width,
  height,
  space,
  SpaceProps,
  borders
} from "styled-system"

type Btn = ButtonStyleProps &
  BorderProps &
  LayoutProps &
  BackgroundProps &
  SpaceProps

const buttonStyled = compose(
  background,
  backgroundColor,
  borders,
  width,
  height,
  space
)

const StyledButton = styled.button<Btn>`
  ${buttonStyled}

  &:hover {
    cursor: pointer;
  }
`

StyledButton.defaultProps = {
  background: "#fff",
  border: "1px solid #777",
  borderRadius: "5px",
  padding: "0.5rem"
}

export { StyledButton as Button }
