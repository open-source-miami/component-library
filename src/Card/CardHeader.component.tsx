import * as React from "react"
import { ICardHeader } from "./Card"
import Typography from "../Typography"
import { HeaderContainer } from "./Card.styles"

const CardHeader: React.SFC<ICardHeader> = ({
  children,
  title,
  subTitle,
  ...rest
}) => (
  <HeaderContainer {...rest}>
    {title && <Typography variant="h3">{title}</Typography>}
    {subTitle && <Typography variant="h5">{subTitle}</Typography>}
    {children}
  </HeaderContainer>
)

export default CardHeader
