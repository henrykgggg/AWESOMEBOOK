const bookForm = document.querySelector('#book-form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const booksList = document.querySelector('#book-list');

// create a class book with add remove add display methods

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const bookObj = { allbook: [] };
    if (JSON.parse(localStorage.getItem('books')) == null) {
      localStorage.setItem('books', JSON.stringify(bookObj));
    }

    const obj = JSON.parse(localStorage.getItem('books'));
    // set obj to empty
    obj.allbook = [];
     // push new book to obj

    if (this.title.value !== '' && this.author.value !== '') {
      alert('Book title and author are required');
      obj.allbook.push({
        title: this.title,
        author: this.author,
      });
    }
    localStorage.setItem('books', JSON.stringify(obj));
  }
  static removeBook(title) {
    const books = Book.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
function display() {
  const obj = JSON.parse(localStorage.getItem('books'));
  obj.allbook.forEach((item) => {
    booksList.innerHTML += `
            <td>${'"'}${item.title}${'"'}${' '}${'By'}${' '}${item.author}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Remove</a></td>
            `;
  });
}