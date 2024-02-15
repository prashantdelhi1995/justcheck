function handleOnSubmit(event){
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
    axios.post("https://crudcrud.com/api/0841118fa795489790707645ff18713b/image", newBlog)
    .then((res) => {
        console.log(res.data);
        // Clear the form fields
        document.getElementById('image').value = '';
        document.getElementById('title').value = '';
        document.getElementById('blog').value = '';
        displayBlogs(); // After posting new blog, display all blogs
    })
    .catch(err => console.log(err));
}
displayBlogs()

function displayBlogs() {
    let totalpost=document.getElementById("noofpost")
    let blogsContainer = document.getElementById('blogs-container');
    totalpost.style.fontSize="x-large";

    axios.get("https://crudcrud.com/api/0841118fa795489790707645ff18713b/image")
    .then(res => {
        totalpost.innerHTML=`Total post = ${res.data.length}`



        res.data.forEach(blog => {
            let blogElement = document.createElement('div');
            blogElement.innerHTML = `
                <div>
                    <h2>${blog.title}</h2>
                    <img src="${blog.imageUrl}" alt="Blog Image" style="width: 200px;">
                    <p>${blog.blog}</p>
                    <button id="edit" onclick="handleEdit('${blog._id}')">Edit</button>
                    <button id="delete" onclick="handleDelete('${blog._id}')">Delete</button>
                </div>
            `;
            blogsContainer.appendChild(blogElement);
        });
    })
    .catch(err => console.log(err));
}
function handleEdit(blogId) {
    
    axios.get(`https://crudcrud.com/api/e6b3c22bdadd4034bcc111b22e1c166d/image/${blogId}`)
    .then(res => {
        let blogData = res.data;
        document.getElementById('image').value = blogData.imageUrl;
        document.getElementById('title').value = blogData.title;
        document.getElementById('blog').value = blogData.blog;

        // Change the submit button text to "Update Blog"
        document.getElementById('submitButton').innerText = 'Update Blog';
    })
    .catch(err => console.log(err));
    // Implement your edit logic here
    // You might want to open a modal with the blog details populated for editing
    console.log('Editing blog with ID:', blogId);
}

function handleDelete(blogId) {
    
    axios.delete(`https://crudcrud.com/api/0841118fa795489790707645ff18713b/image/${blogId}`)
    .then(res => {
        console.log('Blog deleted:', res.data);
        displayBlogs(); 
    })
    .catch(err => console.log(err));
}
