// const { addUser, editUser, deleteUser, renderUserTable } = require('../script'); // Adjust the path to your script.js file
import {renderUserTable} from '../script'

document.body.innerHTML = `
  <input type="text" id="userNameInput" />
  <table id="userTable">
    <tbody></tbody>
  </table>
`;

describe('User List Management', () => {
  beforeEach(() => {
    // Reset the list and input field before each test
    const users = ['Sunitha', 'Poorany', 'Viswa', 'Shyam'];
    document.getElementById('userNameInput').value = '';
    renderUserTable();
  });

  test('adds a new user', () => {
    document.getElementById('userNameInput').value = 'New User';
    addUser();
    expect(users).toContain('New User');
  });

  test('edits an existing user', () => {
    editUser(1); // Edit "Poorany"
    document.getElementById('userNameInput').value = 'Edited User';
    addUser(); // Save edited name
    expect(users[1]).toBe('Edited User');
  });

  test('deletes a user', () => {
    deleteUser(2); // Delete "Viswa"
    expect(users).not.toContain('Viswa');
  });
});
