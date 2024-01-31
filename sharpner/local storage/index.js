// Write your code below:

// const form =document.getElementById("userForm")

// form.addEventListener("submit",function(event){
//   event.preventDefault();
//   const username=document.getElementById("username").value

// const email = document.getElementById("email").value;
// const phone = document.getElementById("phone").value;
//   localStorage.setItem("name",username)
//   console.log(username)
// localStorage.setItem("email",email)
// console.log(email)
// localStorage.setItem("phone ",phone )
// console.log(phone)
// console.log("submitted successfully")

  
  
// })
// console.log(form)
function handleFormSubmit(event){
  event.preventDefault()
  const username=document.getElementById("username").value

const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const userDetails={
  userName:username,
  email:email,
  phone:phone
  }
  localStorage.setItem("User Details",JSON.stringify(userDetails) )
  

  
  
}




