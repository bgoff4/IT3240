document.getElementById('add_button').addEventListener('click', addVolunteer);
document.getElementById('delete_button').addEventListener('click', deleteVolunteer);
document.getElementById('sort_button').addEventListener('click', sortVolunteers);
document.getElementById('clear_button').addEventListener('click', clearVolunteers);

function addVolunteer() {
    // Get the input values
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;

    // Check if both fields are filled
    if (firstName && lastName) {
        // Get the current list of volunteers
        const volunteerList = document.getElementById('volunteerList');
        // Add the new volunteer to the list
        volunteerList.value += `${firstName} ${lastName}\n`;
        // Clear the input fields
        document.getElementById('first_name').value = '';
        document.getElementById('last_name').value = '';
    } else {
        alert('Please enter both first and last names.');
    }
}

function deleteVolunteer() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const volunteerList = document.getElementById('volunteerList').value.split('\n');
    const fullName = `${firstName} ${lastName}`;
    const index = volunteerList.indexOf(fullName);

    if (index !== -1) {
        volunteerList.splice(index, 1);
        document.getElementById('volunteerList').value = volunteerList.join('\n');
        document.getElementById('first_name').value = '';
        document.getElementById('last_name').value = '';
    } else {
        alert('Volunteer not found.');
    }
}

function sortVolunteers() {
    const volunteerList = document.getElementById('volunteerList').value.split('\n').filter(Boolean);
    volunteerList.sort();
    document.getElementById('volunteerList').value = volunteerList.join('\n');
}

function clearVolunteers() {
    document.getElementById('volunteerList').value = '';
}
