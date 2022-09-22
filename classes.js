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

  