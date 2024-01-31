let form = document.getElementById("form");

form.addEventListener("submit", getitems);

function getitems(e) {
    e.preventDefault();

  let amount = e.target.amountinput.value;
  let description = e.target.descriptioninput.value;
  let selected = e.target.selected.value;

  var obj = {
    "amount":amount,
    "description":description,
    "selected":selected,
  };
  var objtostr = JSON.stringify(obj);
  localStorage.setItem(obj.description, objtostr);
}

for (var i = 0; i < localStorage.length; i++) {
  var keys = localStorage.key(i);
  var data = localStorage.getItem(keys);
  var strtoobj = JSON.parse(data);
  displayonscreen(strtoobj);
}

function displayonscreen(obj) {
  var li = `<li id="${obj.description}">${obj.amount} ${obj.description} ${obj.selected}  <button onClick="deleting('${obj.description}')">del</button>  <button onClick="editing('${obj.description}')">edit</button></li>`;

  var target = document.getElementById("ul");
  target.innerHTML = target.innerHTML + li;
}

function deleting(e) {
  localStorage.removeItem(e);
  removefromscreen(e);
}

function removefromscreen(e) {
  var parent = document.getElementById("ul");
  var child = document.getElementById(e);
  parent.removeChild(child);
}

function editing(e) {
  let amountval = JSON.parse(localStorage.getItem(e)).amount;

  let descval = JSON.parse(localStorage.getItem(e)).description;

  let selecteditem = JSON.parse(localStorage.getItem(e)).selected;

  document.getElementById("amountinput").value = amountval;
  document.getElementById("descriptioninput").value = descval;
  document.getElementById("selected").value = selecteditem;
}