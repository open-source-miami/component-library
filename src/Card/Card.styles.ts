import styled, { css } from "styled-components"
import { Box } from "@rebass/grid"
import {
  ICardProps,
  ICardHeader,
  ImageSize,
  ImageSpaceDirection,
  ICardImage,
  ICardBody,
  ICardFlipper,
  ICardFooter
} from "./Card"

// Card.component
export const CardContainer = styled(Box)<ICardProps>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;

  & > a {
    cursor: pointer;
  }

  &:last-child {
    padding-bottom: 10px;
  }

  // Modifiers
  ${({ raised }) =>
    raised &&
    css`
      box-shadhow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    `};

  ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
      max-width: 9999px;
    `}

  ${({ hoverable }) =>
    hoverable &&
    css`
      transform: translateY(0);
      transition: transform 0.5s, box-shadow 0.5s;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2);
      }
    `}
`
// CardHeader.component
export const HeaderContainer = styled.div<ICardHeader>`
  padding: 0 5px;
  margin-top: 10px;

  // Modifiers
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};
`
// CardImage.component
const getSize = (size: ImageSize): string => {
  const sizes = {
    mini: "80px",
    small: "150px",
    medium: "300px",
    large: "450px",
    huge: "600px"
  }
  if (size) {
    return sizes[size]
  }
  return "100%"
}
const getSpace = (dir: ImageSpaceDirection): string => {
  const spaces = {
    left: "margin-left: 1em;",
    right: "margin-right: 1em;",
    top: "margin-top: 1em;",
    bottom: "margin-bottom: 1em;"
  }
  if (dir) {
    return spaces[dir]
  }
  return "margin: auto;"
}

export const StyledImage = styled.img<ICardImage>`
  display: block;
  position: relative;
  flex: 0 0 auto;
  padding: 0;

  // Modifiers
  width: ${({ size }) => getSize(size)};
  float: ${({ floated }) => floated || "none"};
  border-radius: ${({ rounded, circular }) =>
    (rounded && "10px") || (circular && "50%") || "0"};
  ${({ space }) => getSpace(space)};
`

// CardBody.component
export const BodyContainer = styled.div<ICardBody>`
  margin: 10px auto;
  padding: 0 5px;

  &::after {
    content: "";
    clear: both;
    display: table;
  }

  ${({ bordered }) =>
    bordered &&
    css`
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: 10px 5px;
      margin: 10px 0;
    `}
`

// CardFlipper.component
export const FlipContainer = styled(Box)<ICardFlipper>`
  display: inline-block;
  position: relative;
  transition: 0.6s;
  transform: perspective(1000px);
  transform-style: preserve-3d;

  .cardBase {
    position: relative;
    transform: ${({ vertical }) =>
      css`
        ${vertical ? "rotateX(0deg)" : "rotateY(0deg)"};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        backface-visibility: hidden;
        transform-style: preserve-3d;

        &:first-of-type {
          transform: ${vertical ? "rotateX(0deg)" : "rotateY(0deg)"};
        }

        &:last-child {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          transform: ${vertical ? "rotateX(180deg)" : "rotateY(180deg)"};
        }
      `};
  }

  ${({ enabled, vertical }) =>
    enabled &&
    css`
      transform: ${vertical ? "rotateX(180deg)" : "rotateY(180deg)"}};
    `}
`

// CardFooter.component
export const SCardFooter = styled.div<ICardFooter>`
  display: block;
  padding: 10px 5px;
  overflow: hidden;

  // Modifiers
  text-align: ${({ textAlign }) => textAlign || ""};
  ${({ bordered }) =>
    bordered &&
    css`
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    `}
`
