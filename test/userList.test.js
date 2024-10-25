import { fireEvent, getByPlaceholderText, getByText, queryByText, render } from '@testing-library/dom';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';


document.body.innerHTML = `
    <div class="container">
        <h1>User List</h1>
        <form id="user-form">
            <input type="text" id="user-name" placeholder="Enter user name" required>
            <button type="submit">Add User</button>
        </form>
        <ul id="user-list"></ul>
    </div>
`;

require('../script'); // Import the main script

describe('User List Application', () => {
    test('renders User List container', () => {
        // const heading = getByText(document.body, /User List/i);
        const container = document.getElementsByClassName('container')[0]
        // expect(heading).toBeInTheDocument();
        expect(1).toBe(1);
        expect(container).toBeInTheDocument()
    });

    test('renders User List heading', () => {
        const heading = getByText(document.body, /User List/i);
        expect(heading).toBeInTheDocument();
    });

    test('allows users to add a user', () => {
        const input = getByPlaceholderText(document.body, /Enter user name/i);
        const form = document.getElementById('user-form');

        fireEvent.change(input, { target: { value: 'John Doe' } });
        fireEvent.submit(form);

        expect(getByText(document.body, /John Doe/i)).toBeInTheDocument();
    });

    // test('allows users to edit a user', () => {
    //     const input = getByPlaceholderText(document.body, /Enter user name/i);
    //     const form = document.getElementById('user-form');

    //     fireEvent.change(input, { target: { value: 'Jane Doe' } });
    //     fireEvent.submit(form);

    //     // Mock prompt for editing
    //     jest.spyOn(window, 'prompt').mockReturnValue('Janet Doe');

    //     const editButton = getByText(document.body, /Edit/i);
    //     fireEvent.click(editButton);

    //     expect(getByText(document.body, /Janet Doe/i)).toBeInTheDocument();
    //     window.prompt.mockRestore(); // Restore original prompt function
    // });

    // test('allows users to delete a user', () => {
    //     const input = getByPlaceholderText(document.body, /Enter user name/i);
    //     const form = document.getElementById('user-form');

    //     fireEvent.change(input, { target: { value: 'Delete Me' } });
    //     fireEvent.submit(form);

    //     // Mock window.confirm
    //     jest.spyOn(window, 'confirm').mockReturnValue(true);

    //     const deleteButton = getByText(document.body, /Delete/i);
    //     fireEvent.click(deleteButton);

    //     expect(queryByText(document.body, /Delete Me/i)).not.toBeInTheDocument();
    //     window.confirm.mockRestore(); // Restore original confirm function
    // });
});
