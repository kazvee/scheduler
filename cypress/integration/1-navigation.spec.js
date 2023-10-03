describe('Navigation', () => {
  it('visits root', () => {
    cy.visit('/');
  });

  it('navigates to Tuesday', () => {
    cy.visit('/');

    // Works:
    // cy.get("li").contains("Tuesday").click()
    // cy.contains("li", "Tuesday").should("have.css", "background-color", "rgb(242, 242, 242)")

    // Refactored to use a single command chain that finds the list item, clicks it and checks it for the correct background colour:
    // cy.contains('li', 'Tuesday')
    //   .click()
    //   .should('have.css', 'background-color', 'rgb(242, 242, 242)');

    // Refactored to align with best practice and use the data-testid attribute and 'selected' css class to make the test more durable:
    cy.contains('[data-testid=day]', 'Tuesday')
      .click()
      .should('have.class', 'day-list__item--selected');
  });
});
