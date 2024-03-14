/// <reference types="cypress" />

describe("Clima Cast app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays two todo items by default", () => {
    cy.get("h1").should("have.text", "Clima Cast");
  });
});
