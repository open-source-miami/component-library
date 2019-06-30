import * as React from "react"
import { ICardFlipper } from "./Card"
import { FlipContainer } from "./Card.styles"

/**
 * Displays 2 cards as one with a front and back that is flipped on click
 */
export const CardFlipper: React.FC<ICardFlipper> = ({
  children,
  onClick,
  ...rest
}) => {
  if (children.length !== 2) {
    throw new Error(`
        <Card.Flipper> component must have 2 child <Card> components
      `)
  }
  const [enabled, setEnabled] = React.useState(false)
  return (
    <FlipContainer
      enabled={enabled}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setEnabled(!enabled)
        if (onClick) {
          onClick(e)
        }
      }}
      {...rest}
    >
      {children}
    </FlipContainer>
  )
}

export default CardFlipper
