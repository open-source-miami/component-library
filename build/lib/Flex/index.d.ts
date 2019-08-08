import { JustifyContentProps, AlignContentProps, AlignItemsProps } from "styled-system";
import { BoxProps } from "../Box";
declare type Flex = BoxProps & JustifyContentProps & AlignContentProps & AlignItemsProps;
/**
 * Flex container
 */
declare const Flex: import("styled-components").StyledComponent<"div", any, Flex, never>;
export default Flex;
