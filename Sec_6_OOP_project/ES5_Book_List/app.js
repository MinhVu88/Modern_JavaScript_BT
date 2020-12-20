// DOM VARS
const container = document.querySelector('.container'),
      book_form = document.querySelector('#book-form'),
      book_list = document.querySelector('#book-list'),
      title_input = document.querySelector('#title'),
      author_input = document.querySelector('#author'),
      isbn_input = document.querySelector('#isbn');

// CONSTRUCTORS
// the book constructor's responsible for creating Book objects
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};

// the UI constructor's responsible for setting up UI-oriented prototype methods 
function UI() {};

// PROTOTYPE METHODS
UI.prototype.addBook = function(book) {
    console.log(book);

    const table_row = document.createElement('tr');

    table_row.innerHTML = `<td>${book.title}</td>
                           <td>${book.author}</td>
                           <td>${book.isbn}</td>
                           <td>
                              <a href='#' class='delete'>X</a>
                           </td>`;
    
    book_list.appendChild(table_row);
};

UI.prototype.clearInput = function() {book_form.reset();};

UI.prototype.showAlert = function(msg, css_class) {
    const alert_div = document.createElement('div');

    alert_div.className = `alert ${css_class}`;

    alert_div.appendChild(document.createTextNode(msg));

    container.insertBefore(alert_div, book_form);

    setTimeout(() => {
        alert_div.remove();
    }, 3000);
};

/* 
<tbody id="book-list">
    <tr>
        <td> title </td>
        <td> author </td>
        <td> isbn </td> 
        <td> 
            <a href='#' class='delete'> X </a> 
        </td> 
    </tr>
</tbody>

- As event delegation is used, the 'click' event handler is attached to tbody

- If user clicks X, the element that contains X will be checked if it has a class of 'delete'

- If it does, then the element's grandparent is removed

-> e.target/removedBook = a | removedBook.parentElement = td | removedBook.parentElement.parentElement = tr

-> removedBook.parentElement.parentElement.remove() => the whole table row (title, author, isbn and X) is deleted
*/
UI.prototype.deleteBook = function(removedBook) {
    if(removedBook.className === 'delete') removedBook.parentElement.parentElement.remove();
};

// EVENT HANDLERS
// adding books
book_form.addEventListener('submit', e => {
    e.preventDefault();

    const title_value = title_input.value,
          author_value = author_input.value,
          isbn_value = isbn_input.value;

    // instantiate a Book object
    const book = new Book(title_value, author_value, isbn_value);

    // instantiate an UI object
    const ui = new UI();

    // book validation
    if (title_value === '' || author_value === '' || isbn_value === '') {
        ui.showAlert('Invaid input detected', 'error');
    } else {
        ui.addBook(book);

        ui.showAlert('Book Added!', 'success');

        ui.clearInput();   
    }

    console.log(ui);
});

// removing a book (event delegation)
book_list.addEventListener('click', e => {
    const ui = new UI();

    ui.deleteBook(e.target);

    console.log(e.target);

    ui.showAlert('Book removed', 'success');
});