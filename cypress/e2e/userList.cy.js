describe('User List CRUD Operations', () => {
  beforeEach(() => {
    //   cy.visit('index.html');
    cy.visit('https://tech-workshop.github.io/user-management-app/');
  });

  it('should add a user', () => {
    cy.get('#userNameInput').type('John Doe');
    cy.contains('Add User').should('exist')
    cy.contains('Add User').click();    
  });

  it('should edit a user', () => {
    cy.wait(3000)
    cy.get('#userNameInput').type('John Doe');
    cy.contains('Add User').should('exist')
    cy.contains('Add User').click();

    cy.contains('John Doe').parent().find('button').contains('Edit').click();
    cy.get('#userNameInput').type(' Changed');
    cy.contains('Add User').should('exist')
    cy.contains('Add User').click();
  });
  
    it('should delete a user', () => {
    });

});
