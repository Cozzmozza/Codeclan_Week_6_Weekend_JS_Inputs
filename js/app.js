document.addEventListener('DOMContentLoaded', () => {

    // All my grab code here

    const form = document.querySelector('#form_vehicle');
    form.addEventListener('submit', formSubmission);

    const deleteButton = document.querySelector('#button_delete');
    deleteButton.addEventListener('click', formWipe);

})


// Function to take form inputs, and post them as an <li> in the HTML <ul>
const formSubmission = function(event){

    // Disable default POST behavior
    event.preventDefault();

    // Grab the inputs from the form
    const type = event.target.vehicle_type.value;
    const make = event.target.vehicle_make.value;
    const model = event.target.vehicle_model.value;
    const year = event.target.vehicle_year.value;

    // Declare an <li> element
    const listItem = document.createElement('li');

    // Set the <li> text content to include all our inputs
        // Setting to just one string at first to make sure it works
    listItem.textContent = `${type} ${make} ${model} ${year}`

    // Grab the <ul> in the HTML we want to add our <li> to
    const outputList = document.querySelector('#form_output_list');

    // Append our <li> to it
    outputList.appendChild(listItem);

    // Reset the inputs to origina blank/placeholdered
    event.target.reset();
}

const formWipe = function (event){
    const outputList = document.querySelector('#form_output_list');
    outputList.innerHTML = '';
}