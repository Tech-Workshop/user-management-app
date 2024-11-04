let users = ['Sunitha', 'Poorany', 'Viswa', 'Shyam'];
let editIndex = null;

function renderUserTable() {
  const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
  userTable.innerHTML = '';

  users.forEach((user, index) => {
    const row = userTable.insertRow();

    const nameCell = row.insertCell(0);
    nameCell.textContent = user;

    const actionCell = row.insertCell(1);
    actionCell.innerHTML = `
      <button class="edit" onclick="editUser(${index})">Edit</button>
      <button class="delete" onclick="deleteUser(${index})">Delete</button>
    `;
  });
}

function addUser() {
  const userNameInput = document.getElementById('userNameInput');
  const userName = userNameInput.value.trim();

  if (!userName) {
    alert('Please enter a user name.');
    return;
  }

  if (editIndex !== null) {
    users[editIndex] = userName;
    editIndex = null;
  } else {
    users.push(userName);
  }

  userNameInput.value = '';
  renderUserTable();
}

function editUser(index) {
  const userNameInput = document.getElementById('userNameInput');
  userNameInput.value = users[index];
  editIndex = index;
}

function deleteUser(index) {
  users.splice(index, 1);
  renderUserTable();
}

window.onload = renderUserTable;
