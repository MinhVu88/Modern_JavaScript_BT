// Fahrenheit 451 isbn: 978-0-7432-4722-1
// DOM VARS
const container = document.querySelector('.container'),
      book_form = document.querySelector('#book-form'),
      book_list = document.querySelector('#book-list'),
      title_input = document.querySelector('#title'),
      author_input = document.querySelector('#author'),
      isbn_input = document.querySelector('#isbn');

// CLASSES & METHODS
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    };
};

class UI {
    addBookToUI(book) {
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

    deleteBook(removedBook) {
        if(removedBook.className === 'delete') removedBook.parentElement.parentElement.remove();
    };

    clearInput() {book_form.reset();};

    showAlert(msg, css_class) {
        const alert_div = document.createElement('div');

        alert_div.className = `alert ${css_class}`;

        alert_div.appendChild(document.createTextNode(msg));

        container.insertBefore(alert_div, book_form);

        setTimeout(() => {alert_div.remove();}, 3000);
    };
};

class LocalStore {
    static getBooksFromLocalStorage() {
        let books;

        if (localStorage.getItem('books656') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books656'));
        }

        return books;
    };

    static showBooksFromLocalStorageToUI() {
        const books = LocalStore.getBooksFromLocalStorage();

        books.forEach(book => {
            const ui = new UI();

            ui.addBookToUI(book);
        });
    };

    static addBookToLocalStorage(book) {
        const books = LocalStore.getBooksFromLocalStorage();

        books.push(book);

        localStorage.setItem('books656', JSON.stringify(books));
    };

    static removeBookFromLocalStorage(removed_isbn) {
        console.log(removed_isbn);

        const books = LocalStore.getBooksFromLocalStorage();

        books.forEach((book, index) => {
            if(book.isbn === removed_isbn) books.splice(index, 1);
        });

        localStorage.setItem('books656', JSON.stringify(books));
    };
};

// EVENT HANDLERS
// adding books to the ui & local storage
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
        ui.addBookToUI(book);

        LocalStore.addBookToLocalStorage(book);

        ui.showAlert('Book Added!', 'success');

        ui.clearInput();   
    }

    console.log(ui);
});

// removing a book from the UI (event delegation) & local storage
book_list.addEventListener('click', e => {
    const ui = new UI();

    ui.deleteBook(e.target);

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
    
    -  
    */
    LocalStore.removeBookFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);

    console.log('e.target:',e.target,
                '\ne.target.parentElement:',e.target.parentElement,
                '\ne.target.parentElement.previousElementSibling:',e.target.parentElement.previousElementSibling,
                '\ne.target.parentElement.previousElementSibling.textContent:',e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('Book removed', 'success');
});

// Dom content loading event
document.addEventListener('DOMContentLoaded', LocalStore.showBooksFromLocalStorageToUI);