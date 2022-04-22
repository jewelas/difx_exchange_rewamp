import { render } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  it("should render successfully", () => {
    const onNavigation = jest.fn();
    const { baseElement } = render(
      <Header onNavigation={onNavigation} />
    );
    expect(baseElement).toBeTruthy();
  });
});
