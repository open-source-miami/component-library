import { FlexBasisProps, BorderRadiusProps, FlexDirectionProps, FlexWrapProps, MaxWidthProps, SpaceProps, ColorProps, FlexProps, WidthProps, BorderProps, HeightProps } from "styled-system";
export declare type BoxProps = SpaceProps & FlexProps & HeightProps & ColorProps & WidthProps & MaxWidthProps & BorderProps & FlexBasisProps & FlexWrapProps & BorderRadiusProps & FlexDirectionProps & {
    boxSizing?: string;
};
declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
export default Box;
