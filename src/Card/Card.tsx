import * as React from "react"
import styled from "styled-components"
import {
  BackgroundProps,
  compose,
  background,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  backgroundImage,
  boxShadow,
  BoxShadowProps,
  position,
  PositionProps,
  FontSizeProps,
  FontWeightProps,
  FontFamilyProps,
  fontFamily,
  fontWeight,
  fontSize,
  backgroundColor
} from "styled-system"
import { ITypography } from "Typography/Typography"
import Box, { BoxProps } from "../Box"
import Typography from "../Typography"

interface CardComposition {
  Body: React.FC<{}>
  Title: React.FC<Partial<CardTitles>>
  Text: React.FC<{}>
  Subtitle: React.FC<Partial<CardTitles>>
  Image: React.FC<ICardImage>
  Header: React.FC<{}>
  Footer: React.FC<{}>
  Overlay: React.FC<BackgroundProps>
}

type TCard = BoxProps &
  BackgroundProps &
  BoxShadowProps &
  PositionProps &
  React.HTMLAttributes<HTMLDivElement>

const bg = compose(
  background,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  boxShadow,
  position
)

const StyledCard = styled(Box)<TCard>`
  ${bg}
  font-family: Roboto, sans-serif;
  overflow: hidden;
`

const Card: React.FC<TCard> & CardComposition = ({ children, ...props }) => {
  return (
    <StyledCard backgroundColor={props.backgroundColor || "#fff"} {...props}>
      {children}
    </StyledCard>
  )
}

Card.defaultProps = {
  borderRadius: "5px",
  position: "relative"
}

const CardBody = styled.div`
  padding: 1rem;
`

const CardHeader = styled.nav`
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 0;
`
const CardHeaderComponent: React.FC<{}> = ({ children, ...props }) => {
  return <CardHeader {...props}>{children}</CardHeader>
}

type CardTitles = FontSizeProps &
  FontWeightProps &
  FontFamilyProps &
  ITypography

const fonts = compose(
  fontFamily,
  fontSize,
  fontWeight,
  fontWeight
)

const CardTitle = styled(Typography)<CardTitles>`
  ${fonts}
`

const CardTitleComponent: React.FC<CardTitles> = ({
  children,
  ...props
}: React.PropsWithChildren<CardTitles>) => {
  return (
    <CardTitle
      {...props}
      fontWeight={props.fontWeight || "lighter"}
      margin={props.margin || "0"}
      variant={props.variant || "h2"}
    >
      {children}
    </CardTitle>
  )
}

const CardSubtitleComponent: React.FC<Partial<CardTitles>> = ({
  children,
  ...props
}: React.PropsWithChildren<CardTitles>) => {
  return (
    <Typography
      {...props}
      fontWeight={props.fontWeight || "lighter"}
      margin={props.margin || "0"}
      variant={props.variant || "h4"}
      color={props.color || "#777"}
    >
      {children}
    </Typography>
  )
}

const CardTextComponent: React.FC<{}> = ({ children }) => {
  return <Typography variant="p">{children}</Typography>
}

interface ICardImage extends React.HTMLAttributes<HTMLImageElement> {
  src: string
}

const CardImage = styled.img<ICardImage>`
  width: 100%;
  display: block;
`

const CardImageComponent: React.FC<ICardImage> = (props: ICardImage) => {
  return <CardImage {...props} />
}

const CardFooter = styled.div`
  margin-top: 0;
  border-top: 1px solid #ccc;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
`

const CardFooterComponent: React.FC<{}> = ({ children }) => {
  return <CardFooter>{children}</CardFooter>
}

const CardOverlay = styled.div<BackgroundProps>`
  ${background}
  ${backgroundColor}
`

const CardOverlayComponent: React.FC<BackgroundProps> = ({
  children,
  ...props
}: React.PropsWithChildren<BackgroundProps>) => {
  return <CardOverlay {...props}>{children}</CardOverlay>
}

Card.Body = CardBody
Card.Title = CardTitleComponent
Card.Text = CardTextComponent
Card.Subtitle = CardSubtitleComponent
Card.Image = CardImageComponent
Card.Header = CardHeaderComponent
Card.Footer = CardFooterComponent
Card.Overlay = CardOverlayComponent

export default Card
