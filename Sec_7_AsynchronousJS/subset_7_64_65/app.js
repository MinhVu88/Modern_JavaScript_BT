// this's where we test the easyhttp library
const http = new EasyHTTP();

// HTTP GET REQUEST
// const posts = http.get('https://jsonplaceholder.typicode.com/posts/'); // wrong

// console.log(posts); // wrong

// get posts
http.get('https://jsonplaceholder.typicode.com/posts', function(error, response) {
    if(error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

// get a post by its id (in this case, id === 7)
// http.get('https://jsonplaceholder.typicode.com/posts/7', function(error, response) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

// HTTP POST REQUEST
// create custom data
const data = {
    title: 'custom post',
    body: 'this is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, response) {
    if(error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

// HTTP PUT REQUEST
const post_id = 88;

http.put(`https://jsonplaceholder.typicode.com/posts/${post_id}`, data, function(error, response) {
    if(error) {
        console.log(error);
    } else {
        console.log(response);
    }
});

// HTTP DELETE REQUEST
const removed_post = 21;

http.remove(`https://jsonplaceholder.typicode.com/posts/${removed_post}`, function(error, response) {
    if(error) {
        console.log(error);
    } else {
        console.log(response);
    }
});