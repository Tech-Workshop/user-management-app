describe('User List CRUD Operations', () => {
  beforeEach(() => {
      cy.visit('index.html');
  });

  it('should add a user', () => {
      cy.get('#user-name').type('John Doe');
      cy.get('#user-form').submit();
      cy.contains('John Doe').should('exist');
  });

  it('should edit a user', () => {
      cy.get('#user-name').type('Jane Doe');
      cy.get('#user-form').submit();
      cy.contains('Jane Doe').parent().find('button').contains('Edit').click();
      cy.window().then((win) => {
          cy.stub(win, 'prompt').returns('Janet Doe');
      });
      cy.contains('Janet Doe').should('exist');
  });

  it('should delete a user', () => {
      cy.get('#user-name').type('Delete Me');
      cy.get('#user-form').submit();
      cy.contains('Delete Me').parent().find('button').contains('Delete').click();
      cy.contains('Delete Me').should('not.exist');
  });
});
