import { getGreeting } from "../support/app.po";

describe("shell", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    cy.get(".ant-layout-content .title")
      .invoke("text")
      .should("eq", "MarketAll");
  });
});
