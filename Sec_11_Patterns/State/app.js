const heading = document.querySelector('#heading'),
      content = document.querySelector('#content'),
      home = document.querySelector('#home'),
      about = document.querySelector('#about'),
      contact = document.querySelector('#contact');

const PageState = function() {
    let current_state = new HomeState(this);

    this.init = function() {this.change(new HomeState);},

    this.change = function(state) {current_state = state;}
};

// Home state
const HomeState = function(page) {
    heading.textContent = null;

    content.innerHTML = `<div class="jumbotron">
                            <h1 class="display-4">Hello, world!</h1>
                            <p class="lead">This is a simple hero unit for extra attention to featured content or info</p>
                            <hr class="my-4">
                            <p>It uses utility classes for typography & spacing to space content out within the larger container.</p>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </div>`;
};

const AboutState = function(page) {
    heading.textContent = 'About Us';

    content.innerHTML = `<p>This is the About page</p>`;
};

const ContactState = function(page) {
    heading.textContent = 'Contact Us';

    content.innerHTML = `<form>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control">
                            </div>

                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control">
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                         </form>`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// Home
home.addEventListener('click', e => {
    page.change(new HomeState);
  
    e.preventDefault();
});
  
// About
about.addEventListener('click', e => {
    page.change(new AboutState);
  
    e.preventDefault();
});
  
// Contact
contact.addEventListener('click', e => {
    page.change(new ContactState);
  
    e.preventDefault();
});