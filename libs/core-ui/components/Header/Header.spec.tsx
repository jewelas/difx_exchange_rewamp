import { render } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  it("should render successfully", () => {
    const onNavigation = jest.fn();
    const onChangeTheme = jest.fn();
    const { baseElement } = render(
      <Header onChangeTheme={onChangeTheme} onNavigation={onNavigation} />
    );
    expect(baseElement).toBeTruthy();
  });
});
