import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import {light} from './../../themes'

import Header from ".";

describe("Header", () => {
  it("should render successfully", () => {
    const onNavigation = jest.fn();
    const { baseElement } = render(<ThemeProvider theme={light}><Header onNavigation={onNavigation} /></ThemeProvider>);
    expect(baseElement).toBeTruthy();
  });
});
