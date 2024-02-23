let handleFormSubmit=function (event){
    event.preventDefault()
    const username=document.getElementById("username").value
  
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const userDetails={
    userName:username,
    email:email,
    phone:phone
    }
    localStorage.setItem(email,JSON.stringify(userDetails) )
    
  
    
    
  }