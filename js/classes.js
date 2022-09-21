class library {
  constructor() {
      this.list = localStorage.books
      ? JSON.parse(localStorage.getItem('books'))
      : [];
  ;
  }

  fetchBooks() {
    const bookSection = document.querySelector('.display-books');
    if (this.list) {
      const BooksCard = this.list.map(
        (book) => `<div class='${book.title} book-container'>
      <h1 class="book-title">" ${book.title} " <span class="book-author">by ${book.author}</span></h1>
      <button id=${book.title} class='btn-remove' onclick="this.removeBook(${book.title})">
      remove
      </button>
      </div><hr>`,
      );
      bookSection.innerHTML = BooksCard.join('');
    }
  };

  addBook()  {
    const c = document.querySelector('.title-input');
    const authorInput = document.querySelector('.author-input');
    if (authorInput.value !== '' && titleInput.value !== '') {
      this.list.push({ title: titleInput.value, author: authorInput.value });
      this.fetchBooks();

      localStorage.setItem('books', JSON.stringify(this.list));
    }
  };

    removeBook(title) {
    const updatedList = this.list.filter((book) => book.title !== title);
    this.list = updatedList;
    localStorage.setItem('books', JSON.stringify(this.list));
    this.fetchBooks();
  };


}

const myBookList = new library()
myBookList.fetchBooks()

const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.btn-add');
const removeBtn = document.querySelectorAll('.btn-remove');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  myBookList.addBook();
  authorInput.value = '';
  titleInput.value = '';
});

// removeBtn.forEach((el) => el.addEventListener('click', (e) => {
//   e.preventDefault();
//   myBookList.removeBook(el.id);
//   authorInput.value = '';
//   titleInput.value = '';
// }));
