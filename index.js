import Liberary from './modules/class.js';
import navigate from './modules/nav.js';
import addBook from './modules/utils/addBookController.js';
import { addBtn, bookSection } from './modules/utils/elements.js';

navigate();

// const addBtn = document.querySelector('.btn-add');
const list = localStorage.books ? JSON.parse(localStorage.getItem('books')) : [];

const myBookList = new Liberary(list);
// const bookSection = document.querySelector('.display-books');
const booksCards = myBookList.fetchBooks();
bookSection.innerHTML = booksCards.join('');

window.removeBook = function removeBook(id) {
  myBookList.removeBook(id);
  const updatedList = myBookList.fetchBooks();
  bookSection.innerHTML = updatedList.join('');
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(myBookList);
});
