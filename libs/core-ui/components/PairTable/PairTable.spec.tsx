import { render } from "@testing-library/react";

import PairTable from ".";

describe("CoreUi", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PairTable pairs={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
