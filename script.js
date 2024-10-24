// script.js

// Sample user data array
let users = [];

// Function to render users on the table
function renderUsers(filteredUsers = users) {
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = ''; // Clear the table content

    filteredUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit-btn" onclick="editUser(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to add or update a user
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // If an index is stored, update that user, otherwise add a new one
    if (this.dataset.editIndex !== undefined) {
        users[this.dataset.editIndex] = { name, email };
        this.dataset.editIndex = undefined; // Clear edit index after updating
        document.getElementById('submitBtn').textContent = 'Add User';
    } else {
        users.push({ name, email });
    }

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    renderUsers(); // Re-render the full user list
});

// Function to edit a user
function editUser(index) {
    const user = users[index];

    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;

    // Store the index of the user being edited
    document.getElementById('userForm').dataset.editIndex = index;
    document.getElementById('submitBtn').textContent = 'Update User';
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1); // Remove user from array
    renderUsers(); // Re-render the full user list
}

// Filter users by name or email
document.getElementById('filter').addEventListener('input', function (e) {
    const filterValue = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(filterValue) || 
        user.email.toLowerCase().includes(filterValue)
    );
    renderUsers(filteredUsers);
});

// Initial render (renders the user list when no users are added)
renderUsers();
