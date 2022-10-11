import {} from "styled-components";
import { themeType } from "./AppTheme";

declare module "styled-components" {
  export interface DefaultTheme extends themeType {} // extends the global DefaultTheme with our ThemeType.
}
