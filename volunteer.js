document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add_button');
    const deleteButton = document.getElementById('delete_button');
    const clearButton = document.getElementById('clear_button');
    const sortButton = document.getElementById('sort_button');
    const volunteerList = document.getElementById('volunteerList');
    let volunteers = [];

    addButton.addEventListener('click', addVolunteer);
    deleteButton.addEventListener('click', deleteVolunteer);
    clearButton.addEventListener('click', clearVolunteers);
    sortButton.addEventListener('click', sortVolunteers);

    function addVolunteer() {
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        if (firstName && lastName) {
            volunteers.push(`${firstName} ${lastName}`);
            updateVolunteerList();
        }
    }

    function deleteVolunteer() {
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        volunteers = volunteers.filter(volunteer => volunteer !== `${firstName} ${lastName}`);
        updateVolunteerList();
    }

    function clearVolunteers() {
        volunteers = [];
        updateVolunteerList();
    }

    function sortVolunteers() {
        volunteers.sort();
        updateVolunteerList();
    }

    function updateVolunteerList() {
        volunteerList.value = volunteers.join('\n');
    }
});
