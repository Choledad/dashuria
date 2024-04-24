// Landing Page Script
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete all fields');
        return;
    }

    const post = {
        username: username,
        title: title,
        content: content
    };

    localStorage.setItem('blogPost', JSON.stringify(post));
    window.location.href = 'posts.html';
});

// Posts Page Script
document.addEventListener('DOMContentLoaded', function() {
    const post = JSON.parse(localStorage.getItem('blogPost'));
    if (post) {
        const postsList = document.getElementById('postsList');
        const postItem = document.createElement('div');
        postItem.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>By ${post.username}</p>
        `;
        postsList.appendChild(postItem);
    }
});

// Light/Dark Mode Toggle
const toggleSwitch = document.querySelector('.toggle');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});
