// Write your code below:
let handleFormSubmit=function (event){
  event.preventDefault()
  const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Create user object
    const user= {
        username: username,
        email: email,
        phone: phone
    };

    // Store user details in local storage
    
    localStorage.setItem(email, JSON.stringify(user));
    const userList=document.getElementById("user")
    

    // Add user details to the unordered list
    const listItem = document.createElement("li");
    listItem.textContent = `Username: ${username}, Email: ${email}, Phone: ${phone}`;
    userList.appendChild(listItem);



}
const string=localStorage.getItem("User Details")

console.log(JSON.parse(string))