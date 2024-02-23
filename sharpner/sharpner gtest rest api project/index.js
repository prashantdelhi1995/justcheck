// Function to fetch blogs and display them
 function fetchAndDisplayBlogs() {
    axios.get("https://crudcrud.com/api/fb0e8a45eddb451385e8ab89b978d458/image")
        .then((res) => {
            console.log(res.data.length)
            let totalPosts = res.data.length;
            
            res.data.forEach((localdata) => {
                displayBlog(localdata);
            });
            
            setTotalPosts(totalPosts);
        })
        .catch(error => console.log(error))
}
function updateDisplay(){
    axios.get("https://crudcrud.com/api/fb0e8a45eddb451385e8ab89b978d458/image")
        .then((res) => {
            console.log(res.data.length)
            let totalPosts = res.data.length;
         setTotalPosts(totalPosts);
        })
        .catch(error => console.log(error))
}



// Function to set the total number of posts
function setTotalPosts(total) {
    let totalpost = document.getElementById("noofpost");
    totalpost.style.fontWeight = "bold";
    totalpost.style.fontSize = "35px";
    totalpost.innerHTML = `Total post = ${total}`;
}

// Function to display a single blog
function displayBlog(localdata) {
    var blogsContainer = document.getElementById('blogs-container');
    let blogElement = document.createElement('div');
    blogElement.innerHTML = `
        <div>
            <h2>${localdata.title}</h2>
            <img src="${localdata.imageUrl}" alt="Blog Image" style="width: 200px;">
            <p>${localdata.blog}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    blogsContainer.appendChild(blogElement);

    // Add event listeners for edit and delete buttons
    let editButton = blogElement.querySelector('.edit-btn');
    let deleteButton = blogElement.querySelector('.delete-btn');

    editButton.addEventListener('click', function(event) {
        handleEdit(event, localdata._id, localdata.imageUrl, localdata.title, localdata.blog);
    });

    deleteButton.addEventListener('click', function(event) {
        handleDelete(event, localdata._id);
    });
}

// Event listener for form submission
function handleOnSubmit(event) {
    event.preventDefault();
     // Prevent default form submission

    // Get values from input fields
    let imageUrl = document.getElementById('image').value;
    let title = document.getElementById('title').value;
    let blog = document.getElementById('blog').value;
    let newBlog = {
        imageUrl: imageUrl,
        title: title,
        blog: blog
    };

    axios.post("https://crudcrud.com/api/fb0e8a45eddb451385e8ab89b978d458/image", newBlog)
        .then((res) => {
            console.log(res.data);
            // Clear the form fields
            document.getElementById('image').value = '';
            document.getElementById('title').value = '';
            document.getElementById('blog').value = '';
            displayBlog(res.data);
            updateDisplay()
            
             // After posting new blog, display the new blog
        })
        .catch(err => console.log(err));
}

// Call the function to fetch and display blogs when the page loads
window.addEventListener("DOMContentLoaded", fetchAndDisplayBlogs);

// Handle edit function
function handleEdit(event, blogId, imageUrl, title, blog) {
    let editButton = event.target;
    let parentDiv = editButton.parentElement;
    parentDiv.remove();

    document.getElementById('image').value = imageUrl;
    document.getElementById('title').value = title;
    document.getElementById('blog').value = blog;
   
    handleDelete(event, blogId)


    // Change the submit button text to "Update Blog"
    document.getElementById('submitButton').innerText = 'Update Blog';
    
}

// Handle delete function
function handleDelete(event, blogId) {
    axios.delete(`https://crudcrud.com/api/fb0e8a45eddb451385e8ab89b978d458/image/${blogId}`)
        .then(res => {
            console.log('Blog deleted:', res.data);
            let deleteButton = event.target;
            let parentDiv = deleteButton.parentElement;
            parentDiv.remove();
            updateDisplay()
        })
        .catch(err => console.log(err));
}
