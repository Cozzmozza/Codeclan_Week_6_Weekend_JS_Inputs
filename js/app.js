document.addEventListener('DOMContentLoaded', () => {

    // All my grab code here

    const form = document.querySelector('#form_vehicle');
    form.addEventListener('submit', formSubmission);

    const deleteButton = document.querySelector('#button_delete');
    deleteButton.addEventListener('click', formWipe);

})


// Function called upon the submit event, that adds our form inputs to the HTML <ul>
const formSubmission = function(event){

    // Disable default POST behavior
    event.preventDefault();

    // Call the function to make a new <li>
    const listItem = createListItem(event.target);

    // Grab the <ul> in the HTML we want to add our <li> to
    const outputList = document.querySelector('#list_output');

     // Append our <li> to our grabbed <ul>
    outputList.appendChild(listItem);
    
    // Reset the inputs to original blank/placeholdered
    event.target.reset();
}

// Function that takes in our form input values (content), and appends them to our overall <li>
const createListItem = function (form) {

    const listItem = document.createElement('li');
    listItem.classList.add('list_item');

    const vehicle_nickname = document.createElement('h3');
    vehicle_nickname.textContent = `Nickname - ${form.vehicle_nickname.value}`;
    listItem.appendChild(vehicle_nickname);

    const vehicle_type = document.createElement('h4');
    vehicle_type.textContent = `Type - ${form.vehicle_type.value}`;
    listItem.appendChild(vehicle_type);

    const vehicle_make = document.createElement('h4');
    vehicle_make.textContent = `Make - ${form.vehicle_make.value}`;
    listItem.appendChild(vehicle_make);

    const vehicle_model = document.createElement('h4');
    vehicle_model.textContent = `Model - ${form.vehicle_model.value}`;
    listItem.appendChild(vehicle_model);

    const vehicle_year = document.createElement('h4');
    vehicle_year.textContent = `Year - ${form.vehicle_year.value}`;
    listItem.appendChild(vehicle_year);

    return listItem;

}

const formWipe = function (event){
    const outputList = document.querySelector('#list_output');
    outputList.innerHTML = '';
}