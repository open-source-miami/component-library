import * as React from "react";
import { SpaceProps, ColorProps, FontSizeProps, FontStyleProps, FontWeightProps, LetterSpacingProps, LineHeightProps, TextAlignProps, FlexProps } from "styled-system";
export declare type Typography = FlexProps & FontSizeProps & FontStyleProps & FontWeightProps & LetterSpacingProps & LineHeightProps & TextAlignProps & SpaceProps & ColorProps;
interface ITypography extends Typography {
    /**
     * React children
     */
    children: React.ReactNode;
    /**
     * Text variants
     */
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    /**
     * Font family selection
     */
    fontFamily?: "Roboto" | "Notable";
}
declare const Typography: React.FC<ITypography>;
export default Typography;
