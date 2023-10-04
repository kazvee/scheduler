describe('Navigation', () => {
  it('visits root', () => {
    cy.visit('/');
  });

  it('navigates to Tuesday', () => {
    cy.visit('/');
    cy.contains('[data-testid=day]', 'Tuesday')
      .click()
      .should('have.class', 'day-list__item--selected');
  });
});
