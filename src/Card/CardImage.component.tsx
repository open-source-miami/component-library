import * as React from "react"
import { StyledImage } from "./Card.styles"
import { ICardImage } from "./Card"

const CardImage: React.FC<ICardImage> = ({
  className,
  ...rest
}: ICardImage) => {
  return (
    <StyledImage className={`image ${className || ""}`} {...rest}></StyledImage>
  )
}
export default CardImage
