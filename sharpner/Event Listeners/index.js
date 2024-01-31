console.log("hii connected");
const form=document.querySelector("form");
const fruit=document.querySelector(".fruits");

 //console.log(addDeleteButton)
 
 const addDeleteButton = document.querySelectorAll(".fruit ");

 for (let i = 0; i < addDeleteButton.length; i++) {
   // Create a new button element
   const deleteBtn = document.createElement("button");
   deleteBtn.innerHTML = "Edit";
   deleteBtn.className = "edit-btn";
 
   // Append the button to the li element
   addDeleteButton[i].appendChild(deleteBtn);
 
   console.log(deleteBtn);
 }
 


form.addEventListener("submit",function(event){
  event.preventDefault();
  const fruitToAdd=document.getElementById("fruit-to-add")
  const newLi = document.createElement("li");
  console.log(fruitToAdd.value);
  newLi.innerHTML=fruitToAdd.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>';
  fruit.appendChild(newLi)
  fruitToAdd.value=""
  
  
})
fruit.addEventListener("click",function(event){
  if(event.target.classList.contains("delete-btn")){
    const fruitToDelete=event.target.parentElement;
    fruit.removeChild(fruitToDelete)
  }
})