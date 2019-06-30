import * as React from "react"
import {
  ICardBody,
  ICardHeader,
  ICardFooter,
  ICardImage,
  ICardFlipper,
  ICardProps
} from "./Card"
import { CardContainer } from "./Card.styles"
import CardBody from "./CardBody.component"
import CardHeader from "./CardHeader.component"
import CardFooter from "./CardFooter.component"
import CardImage from "./CardImage.component"
import CardFlipper from "./CardFlipper.component"

interface ICardComposition {
  Body: React.FC<ICardBody>
  Header: React.FC<ICardHeader>
  Footer: React.FC<ICardFooter>
  Image: React.FC<ICardImage>
  Flipper: React.FC<ICardFlipper>
}

/**
 * Card Component displays content within a card
 */
export const Card: React.FC<ICardProps> & ICardComposition = ({
  className,
  image,
  children,
  ...rest
}: ICardProps) => {
  return (
    <CardContainer
      backgroundColor="#fff"
      my="1em"
      mx="0"
      p="0"
      width={290}
      className={`cardBase ${className || ""}`}
      data-testid="CardComponent"
      {...rest}
    >
      {image && <Card.Image src={image} />}
      {children}
    </CardContainer>
  )
}

Card.Body = CardBody

Card.Header = CardHeader

Card.Footer = CardFooter

Card.Image = CardImage

Card.Flipper = CardFlipper

export default Card
