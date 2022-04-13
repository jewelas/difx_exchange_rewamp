import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { light, GlobalStyles } from "../src/lib/themes";

addDecorator((story) => <ThemeProvider theme={light}><GlobalStyles/>{story()}</ThemeProvider>);
