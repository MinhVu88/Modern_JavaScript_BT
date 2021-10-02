// CommonJS
const commonJS = require('./examples/CommonJS');
console.log('\nmodule imported using CommonJS ->',commonJS,'\n\n');

// ES2015
import {es2015, greet} from './examples/ES2015';
import song from './examples/ES2015';
console.log('\nmodule imported using ES2015 ->',es2015);
console.log('module imported using ES2015 ->',greet());
console.log('default export of ES2015 ->',song,'\n\n');

import {http} from './modules/http';
import {ui} from './modules/ui';

const apiUrl = 'http://localhost:3000/posts';

const cardForm = document.querySelector('.card-form');
const posts = document.querySelector('#posts');
const postSubmitBtn = document.querySelector('.post-submit');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#body');
const idInput = document.querySelector('#id');

// get the posts once the page loads
function getPosts() {
  http.get(apiUrl)
      .then(data => ui.showPosts(data))
      .catch(error => console.log(error));
};

function submitPost() {
  const data = {
    title: titleInput.value, 
    body: contentInput.value
  };

  if(titleInput.value === '' || contentInput.value === '') {
    ui.notify('post title & content are required', 'alert alert-danger');
  } else {
    // POST request to post data to db.json
    if(idInput.value === '') {
      http.post(apiUrl, data)
        .then(() => {
          ui.notify('post added', 'alert alert-success');
          ui.clearInputFields();
  
          getPosts();
        })
        .catch(error => console.log(error));
    } else {
      // PUT request to update a post in db.json
      http.put(apiUrl.concat(`/${idInput.value}`), data)
          .then(() => {
            ui.notify('Post updated', 'alert alert-success');

            ui.activateState('add');

            getPosts();
          })
          .catch(error => console.log(error)); 
    }
  }
};

function deletePost(e) {
  e.preventDefault();

  /*
    <a 
      href='#' 
      class='delete card-link' 
      data-id=${post.id}
    >
      <i class="material-icons left" style="color:red;">delete</i>
    </a>

    - The delete icon is clicked to remove a post but
      it's not the element that's targeted

    - Its parent element, which is the a tag, is
    
    - The a tag is then checked if it contains a "delete" class

    - If it does, then the data-id attribute is utilized (dataset.id)
      to accurately identify the post that's about to be removed
  */
  if(e.target.parentElement.classList.contains('delete')) {
    const postId = e.target.parentElement.dataset.id;

    if(confirm('Are you sure?')) {
      http.delete(apiUrl.concat(`/${postId}`))
          .then(() => {
            ui.notify('Post removed', 'alert alert-success');

            getPosts();
          })
          .catch(error => console.log(error));
    }
  }
};

/*
  <div class='card mb-3'>
    <div class='card-body'>
      <h4>post title</h4> (e.target.parentElement.previousElementSibling.previousElementSibling)
      <p>post body</p> (e.target.parentElement.previousElementSibling)
      <a 
        href='#' 
        class='edit card-link' 
        data-id=${post.id}
      > (e.target.parentElement)
        <i class="material-icons left">edit</i> (e.target)
      </a>
      <a>....</a>
    </div>
  </div>
*/
function setEditPostState(e) {
  e.preventDefault();

  if(e.target.parentElement.classList.contains('edit')) {
    // <h4></h4>
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

    // <p></p>
    const body = e.target.parentElement.previousElementSibling.textContent;

    // <input type="hidden" id="id" value="">
    const id = e.target.parentElement.dataset.id;
    
    const potentiallyUpdatedPost = {id, title, body};

    // fill the input fields with the potentially updated post
    ui.showPotentiallyUpdatedPostInInputFields(potentiallyUpdatedPost);
  }
};

function cancelEditPostState(e) {
  e.preventDefault();

  if(e.target.classList.contains('post-cancel')) {
    // by clicking stateCancelBtn, the state is no longer "edit", but "add"
    ui.activateState('add');
  }
}

// event listeners
document.addEventListener('DOMContentLoaded', getPosts);

postSubmitBtn.addEventListener('click', submitPost);

// delete a post, using event propagation
/* more about event propagation"

  - https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/

  - https://www.sitepoint.com/event-bubbling-javascript/

  - https://www.tutorialrepublic.com/javascript-tutorial/javascript-event-propagation.php
*/
posts.addEventListener('click', deletePost);

// update a post, using event delegation
posts.addEventListener('click', setEditPostState);

// event listener for stateCancelBtn, using event delegation
cardForm.addEventListener('click', cancelEditPostState)