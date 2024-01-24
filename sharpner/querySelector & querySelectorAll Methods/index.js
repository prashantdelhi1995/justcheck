// Write the code as shown in the video below:
const basket=document.querySelector("#basket-heading")
basket.style.color="brown"
const basket3=document.querySelector(".fruits")
basket3.style.backgroundColor="grey"
basket3.style.listStyleType="none"

const basket1=document.querySelectorAll(".fruit:nth-child(even)");
for (let i=0;i<basket1.length;i++){
  basket1[i].style.backgroundColor="brown"
  basket1[i].style.color="white";
  
}
const basket4=document.querySelectorAll(".fruit:nth-child(odd)");
for (let i=0;i<basket4.length;i++){
  basket4[i].style.backgroundColor="silver"
  basket4[i].style.color="black";
  
}
const basket5=document.querySelectorAll(".fruit:nth-child(odd)");