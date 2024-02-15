function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const userDetail = {
        username: username,
        email: email,
        phone: phone,
    };

    axios
        .post(
            "https://crudcrud.com/api/db6c800b8dc74f99b8d275c1b22516e4/appointmentData1",
            userDetail
        )
        .then((response) => {
            displayUserOnScreen(response.data); // Pass response.data
        })
        .catch((error) => console.log(error));
}

axios
    .get(
        "https://crudcrud.com/api/db6c800b8dc74f99b8d275c1b22516e4/appointmentData1"
    )
    .then((response) => {
        response.data.forEach(element => {
            displayUserOnScreen(element);
        });
    })
    .catch((error) => console.log(error));

function displayUserOnScreen(element) {
    var li1 = document.createElement("li");
    var textNode = document.createTextNode(`${element.username} ${element.email} ${element.phone}`); // Use element properties
    li1.appendChild(textNode);
    var ul1 =document.querySelector("ul"); 
    ul1.appendChild(li1);
}

// Do not touch the code below
module.exports = handleFormSubmit;
