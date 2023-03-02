// 1. get the container element where you want to add the new elements
//2. create child element
//3. Set innerhtml or innertext
//4. append Child
// dinanamic variable use for this reason ${}
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(data) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of data) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h4>User:${post.id}</h4>
        <h5>Post:${post.title}</h5>
        <p> Post Description: ${post.body} </p>
        `;
        postsContainer.appendChild(div);

        // console.log(post);
    }
}
loadPosts();

function deletepost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

function patchPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
deletepost();