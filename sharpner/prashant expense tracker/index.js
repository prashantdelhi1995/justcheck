let form1=document.getElementById("form")
form1.addEventListener("submit",function (e){
    e.preventDefault()
    let amount= e.target.amount.value
    let description=e.target.Description.value
    let categories=e.target.categories.value
    console.log(amount)

    let obj = {
        "amount":amount,
        "description":description,
        "categories":categories,
      };
      var objtostr = JSON.stringify(obj);
      localStorage.setItem(obj.description, objtostr);



})


