describe('User List CRUD Operations', () => {
  beforeEach(() => {
      cy.visit('https://zhapix.com');
  });

  it('should add a user', () => {
    cy.get('body').should('exist');
    cy.get('#d8c7e443-69b1-448f-9bce-2350c04fc025 > :nth-child(1) > .x-el-section > .c1-28 > .x-el-h2 > span').should('exist')
    
  });

});
