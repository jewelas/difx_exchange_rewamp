import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { light, GlobalStyles } from "./../themes";
import "antd/dist/antd.css";

addDecorator((story) => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));
