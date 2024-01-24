// Write your code below:
const para=document.createElement('h3')
const paraText=document.createTextNode("Buy high quality organic fruits online");
para.append(paraText)
para.style.fontStyle="italic"
const divs=document.getElementsByTagName('div');
const firstDiv=divs[0]
const secondDiv=divs[1]
const para1=document.createElement('p')
const paraText1=document.createTextNode("Total fruits: 4");
para1.append(paraText1)


const fruits=document.querySelector(".fruits")
secondDiv.insertBefore(para1,fruits)
para1.id="fruits-total"
firstDiv.appendChild(para)