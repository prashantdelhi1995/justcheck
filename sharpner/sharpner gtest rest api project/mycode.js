// Event listener for form submission
function handleOnSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from input fields
    let imageUrl = document.getElementById('image').value;
    let title = document.getElementById('title').value;
    let blog = document.getElementById('blog').value;
    let newBlog = {
        imageUrl: imageUrl,
        title: title,
        blog: blog
    };

    axios.post("https://crudcrud.com/api/3073bb0b049c4badbbf49d97ce8bed21/image", newBlog)
        .then((res) => {
            console.log(res.data);
            // Clear the form fields
            document.getElementById('image').value = '';
            document.getElementById('title').value = '';
            document.getElementById('blog').value = '';
            displayBlogs(res.data,res.data.length); // After posting new blog, display all blogs
        })
        .catch(err => console.log(err));
}

// Fetch blogs when the page loads
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/3073bb0b049c4badbbf49d97ce8bed21/image")
        .then((res) => {
            console.log(res.data.length)
            res.data.forEach((localdata) => {
                displayBlogs(localdata, res.data.length)
            })
        }).catch(error => console.log(error))
})

// Function to display blogs
function displayBlogs(localdata, length) {
    let totalpost = document.getElementById("noofpost")
    var blogsContainer = document.getElementById('blogs-container');

    totalpost.style.fontSize = "x-large";
    totalpost.innerHTML = `Total post = ${length}`
    let blogElement = document.createElement('div');
    blogElement.innerHTML = `
        <div>
            <h2>${localdata.title}</h2>
            <img src="${localdata.imageUrl}" alt="Blog Image" style="width: 200px;">
            <p>${localdata.blog}</p>
            <button id="edit" class="edit-btn">Edit</button>
            <button id="delete" class="delete-btn">Delete</button>
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
    axios.delete(`https://crudcrud.com/api/3073bb0b049c4badbbf49d97ce8bed21/image/${blogId}`)
        .then(res => {
            console.log('Blog deleted:', res.data);
            let deleteButton = event.target;
            let parentDiv = deleteButton.parentElement;
            parentDiv.remove();
        })
        .catch(err => console.log(err));
}
