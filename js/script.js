import Liberary from './class.js';

const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.btn-add');
const list = localStorage.books ? JSON.parse(localStorage.getItem('books')) : [];

const myBookList = new Liberary(list);
const bookSection = document.querySelector('.display-books');

window.removeBook = function removeBook(id) {
  myBookList.removeBook(id);
  const updatedList = myBookList.fetchBooks();
  bookSection.innerHTML = updatedList.join('');
};

const booksCards = myBookList.fetchBooks();
bookSection.innerHTML = booksCards.join('');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const currentBook = myBookList.createBookObj(
    titleInput.value,
    authorInput.value,
  );
  myBookList.addBook(currentBook);
  const updatedList = myBookList.fetchBooks();
  bookSection.innerHTML = updatedList.join('');
  authorInput.value = '';
  titleInput.value = '';
});
