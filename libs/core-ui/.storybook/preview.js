import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "jotai";
import { light, GlobalStyles } from "./../themes";
import "antd/dist/antd.css";

addDecorator((story) => (
  <Provider>
    <QueryClientProvider client={ new QueryClient()}>
      <ConfigProvider>
        <ThemeProvider theme={light}>
          <GlobalStyles />
          {story()}
        </ThemeProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </Provider>
));
