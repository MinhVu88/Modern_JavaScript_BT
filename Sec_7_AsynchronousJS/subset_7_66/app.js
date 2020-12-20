const posts_ui = document.querySelector('#posts');

const posts = [
    {title: 'post #1', body: 'this is post 1'},
    {title: 'post #2', body: 'this is post 2'}
];

// USING CALLBACK ASYNCHRONOUSLY
// function createPost(post, callback) {
//     setTimeout(function() {
//         posts.push(post);

//         callback();
//     }, 2000);
// };

// USING PROMISE
function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            const error = false;

            if (error) {
                reject('Error! Something went wrong.');
            } else {
                resolve();
            }
        }, 2000);
    });
};

function getPosts() {
    setTimeout(function() {
        let output = '';

        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });

        posts_ui.innerHTML = output;
    }, 1000);
};

// createPost({title: 'post #3', body: 'this is post 3'}, getPosts);

createPost({title: 'post #3', body: 'this is post 3'}).then(getPosts).catch(function(error) {posts_ui.innerHTML = `<li>${error}</li>`});