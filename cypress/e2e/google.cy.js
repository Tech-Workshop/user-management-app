

describe('launch Zhapix via google search', () => {
  beforeEach(() => {
      cy.visit('https://google.com');
  });

  it('should search for Zhapix Result', () => {
    cy.get('body').should('exist');
    cy.get('[role=combobox]').should('exist');
    cy.get('[role=combobox]').type('zhapix').type('{enter}')
    const zhapixNode =  cy.get('a[href*="https://zhapix.com"]').should('exist')
  });
  it('Should open Zhapix window', () => {
    cy.get('body').should('exist');
    cy.get('[role=combobox]').should('exist');
    cy.get('[role=combobox]').type('zhapix').type('{enter}')
    const zhapixNode =  cy.get('a[href*="https://zhapix.com"]').should('exist')
    zhapixNode.click();
  });
});
