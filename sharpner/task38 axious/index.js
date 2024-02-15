function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/d09c80f6a21a4c82b1b29cf54216c0e5/appointmentData",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  axios
  .get(
    "https://crudcrud.com/api/d09c80f6a21a4c82b1b29cf54216c0e5/appointmentData"
  )
  .then((response) =>
  response.data.forEach(element => {
    displayUserOnScreen(element)})
    
  )
  
  .catch((error) => console.log(error));

  

  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click",  function (event) {
      try {
         axios.delete("https://crudcrud.com/api/d09c80f6a21a4c82b1b29cf54216c0e5/appointmentData/"+userDetails._id);
         
        userList.removeChild(event.target.parentElement);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    });
   
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      document.getElementById("username").value = userDetails.username;
  document.getElementById("email").value = userDetails.email;
  document.getElementById("phone").value = userDetails.phone;
      try {
        axios.put("https://crudcrud.com/api/d09c80f6a21a4c82b1b29cf54216c0e5/appointmentData/"+userDetails._id,
        userDetails
        
        ).
        then(response=>{
          

        })
        
       
     } catch (error) {
       console.error("Error deleting user:", error);
     }
   
    
      
    });
  }
  
  // Do not touch code below
  module.exports = handleFormSubmit;
  