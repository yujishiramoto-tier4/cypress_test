describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Click the count button until it reaches 10', () => {
    cy.wrap([...(new Array(10) as number[])]).each(() => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500);
      cy.get('button').click();
    });
  });
});
