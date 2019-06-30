import * as React from "react"
import { ICardFooter } from "./Card"
import { SCardFooter } from "./Card.styles"

const CardFooter: React.SFC<ICardFooter> = ({ children, ...rest }) => (
  <SCardFooter {...rest}>{children}</SCardFooter>
)
export default CardFooter
