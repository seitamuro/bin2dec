import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    containerBg: string;
    text: string;
    labelText: string;
    border: string;
    inputBg: string;
    outputBg: string;
    focusBorder: string;
    focusShadow: string;
    hoverBorder: string;
    divider: string;
    boxShadow: string;
  }
}
