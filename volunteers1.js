document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add_button');
    const deleteButton = document.getElementById('delete_button');
    const clearButton = document.getElementById('clear_button');
    const sortButton = document.getElementById('sort_button');
    const volunteerList = document.getElementById('volunteerList');
    let volunteers = [];

    addButton.addEventListener('click', function() {
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        if (firstName && lastName) {
            volunteers.push(`${firstName} ${lastName}`);
            updateVolunteerList();
        }
    });

    deleteButton.addEventListener('click', function() {
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        volunteers = volunteers.filter(volunteer => volunteer !== `${firstName} ${lastName}`);
        updateVolunteerList();
    });

    clearButton.addEventListener('click', function() {
        volunteers = [];
        updateVolunteerList();
    });

    sortButton.addEventListener('click', function() {
        volunteers.sort();
        updateVolunteerList();
    });

    function updateVolunteerList() {
        volunteerList.value = volunteers.join('\n');
    }
});
