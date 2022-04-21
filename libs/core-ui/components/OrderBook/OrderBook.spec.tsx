import { render } from "@testing-library/react";

describe("OrderBook", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<div />); // TODO: update later
    expect(baseElement).toBeTruthy();
  });
});
