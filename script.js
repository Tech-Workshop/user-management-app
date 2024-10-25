document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('user-form');
  const userNameInput = document.getElementById('user-name');
  const userList = document.getElementById('user-list');
  let users = [];

  function renderUserList() {
      userList.innerHTML = '';
      users.forEach((user, index) => {
          const li = document.createElement('li');
          li.className = 'user-item';
          li.innerHTML = `
              <span>${user.name}</span>
              <div>
                  <button onclick="editUser(${index})">Edit</button>
                  <button onclick="deleteUser(${index})">Delete</button>
              </div>
          `;
          userList.appendChild(li);
      });
  }

  userForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = userNameInput.value.trim();
      if (userName) {
          users.push({ name: userName });
          userNameInput.value = '';
          renderUserList();
      }
  });

  window.editUser = (index) => {
      const userName = prompt("Edit user name:", users[index].name);
      if (userName) {
          users[index].name = userName;
          renderUserList();
      }
  };

  window.deleteUser = (index) => {
      users.splice(index, 1);
      renderUserList();
  };
});
