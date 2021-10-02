class UI {
  constructor() {
    // assign certain parts of the DOM to certain properties
    this.postsContainer = document.querySelector('.posts-container');
    this.cardForm = document.querySelector('.card-form');
    this.posts = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmitBtn = document.querySelector('.post-submit');
    this.formEnd = document.querySelector('.form-end');
    this.formState = 'add';
  }

  /* HTML Data Attributes (data-*)
  
    - https://css-tricks.com/a-complete-guide-to-data-attributes/

    - https://dev.to/sprite421/how-to-use-html-data-attributes-adc

    - https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/
  */
  showPosts(posts) {
    let output = '';

    posts.forEach(post => {
      output += `
        <div class='card mb-3'>
          <div class='card-body'>
            <h4 class='card-title'>${post.title}</h4>
            <p class='card-text'>${post.body}</p>
            <a 
              href='#' 
              class='edit card-link' 
              data-id=${post.id}
            >
              <i class="material-icons left">edit</i>
            </a>
            <a 
              href='#' 
              class='delete card-link' 
              data-id=${post.id}
            >
              <i 
                class="material-icons left" 
                style="color:red;"
              >
                delete
              </i>
            </a>
          </div>
        </div>
      `;
    });

    this.posts.innerHTML = output;
  }

  notify(msg, classNames) {
    this.clearNotifications();

    const div = document.createElement('div');

    div.className = classNames;

    // create an alert msg as text & append it to the div tag
    div.appendChild(document.createTextNode(msg));

    // the alert msg appears before/above the posts list
    this.postsContainer.insertBefore(div, this.posts);

    // after 3 seconds, the alert msg is gone
    setTimeout(() => {
      this.clearNotifications();
    }, 3000);
  }

  clearNotifications() {
    const currentNotification = document.querySelector('.alert');

    if(currentNotification) {
      currentNotification.remove();
    }
  }

  clearInputFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  showPotentiallyUpdatedPostInInputFields(post) {
    this.titleInput.value = post.title;
    this.bodyInput.value = post.body;
    this.idInput.value = post.id; // <input type="hidden" id="id" value="">

    this.activateState('edit');
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  activateState(state) {
    if(state === 'edit') {
      // EDIT-POST STATE
      // change the text & color of postSubmitBtn
      this.postSubmitBtn.textContent = 'Update Post';
      this.postSubmitBtn.className = 'post-submit btn btn-warning btn-block';

      // create a botton to cancel the edit state
      const stateCancelBtn = document.createElement('button');
      stateCancelBtn.className = 'post-cancel btn btn-light btn-block';
      stateCancelBtn.appendChild(document.createTextNode('Cancel Edit'));

      // insert stateCancelBtn into cardForm, between postSubmitBtn & FormEnd
      this.cardForm.insertBefore(stateCancelBtn, this.formEnd);
    } else {
      // ADD-POST STATE
      // Update Post -> Post It & btn-warning -> btn-primary
      this.postSubmitBtn.textContent = 'Post It';
      this.postSubmitBtn.className = 'post-submit btn btn-primary btn-block';

      // remove stateCancelBtn
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      this.clearIdInput();

      this.clearInputFields();
    }
  }
};

export const ui = new UI();