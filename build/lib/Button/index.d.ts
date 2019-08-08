import { ButtonStyleProps, BorderProps, LayoutProps, BackgroundProps } from "styled-system";
declare type Btn = ButtonStyleProps & BorderProps & LayoutProps & BackgroundProps;
declare const StyledButton: import("styled-components").StyledComponent<"button", any, Btn, never>;
export default StyledButton;
