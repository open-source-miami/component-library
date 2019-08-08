import { BackgroundProps, BorderProps } from "styled-system";
import { BoxProps } from "../Box";
export declare type Card = BoxProps & BackgroundProps & BorderProps;
export declare const bgAndBorders: import("styled-system").styleFn;
declare const Card: import("styled-components").StyledComponent<"div", any, Card, never>;
export default Card;
