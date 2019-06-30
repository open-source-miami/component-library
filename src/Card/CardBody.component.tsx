import * as React from "react"

import { ICardBody } from "./Card"
import { BodyContainer } from "./Card.styles"

const CardBody: React.SFC<ICardBody> = ({ children, ...rest }) => (
  <BodyContainer {...rest}>{children}</BodyContainer>
)

export default CardBody
