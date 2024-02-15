
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  axios.get("https://crudcrud.com/api/c580720bc806404d9fce092777f2408d/todo")
  .then(res=>console.log(res.data))
  
  // Write your code here
}

function postTodo() {
  axios.post("https://crudcrud.com/api/c580720bc806404d9fce092777f2408d/todo",
           {
             title:"************rakesh*************",
             completed:"true"
             
           })
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))
  // Write your code here
}


  function putTodo() {
  axios.put("https://crudcrud.com/api/c580720bc806404d9fce092777f2408d/todo/65cc51866227a803e824c376", {
      title: "hii we have updated some data",
      completed: true
  })
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
}
  // Write your code here


function deleteTodo() {
    axios.delete("https://crudcrud.com/api/c580720bc806404d9fce092777f2408d/todo/65cc51866227a803e824c376")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
}
  // Write your code here

