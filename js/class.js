export default class Liberary {
  constructor(books) {
    this.books = books;
  }

    fetchBooks = () => {
      let BooksCards = [];
      if (this.books) {
        BooksCards = this.books.map(
          (book) => `<div class='${book.title} book-container'>
            <h1 class="book-title">" ${book.title} " <span class="book-author">by ${book.author}</span></h1>
            <button id='${book.title}' class='btn-remove' onclick="removeBook('${book.title}')">
            remove
            </button>
            </div><hr>`,
        );
      }
      return BooksCards;
    };

    addBook = (obj) => {
      if (obj.title !== '' && obj.author !== '') {
        this.books.push(obj);
        localStorage.setItem('books', JSON.stringify(this.books));
      }
    };

    removeBook = (title) => {
      const updatedList = this.books.filter((book) => book.title !== title);
      this.books = updatedList;
      localStorage.setItem('books', JSON.stringify(updatedList));
    };

    createBookObj = (title, author) => {
      const count = this.books.length;
      return {
        id: count + 1,
        author,
        title,
      };
    };
}
