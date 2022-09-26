import Liberary from './modules/class.js';
import navigate from './modules/nav.js';
import addBook from './modules/utils/addBookController.js';
import { addBtn, bookSection } from './modules/utils/elements.js';
import showTime from './modules/time.js';

const list = localStorage.books ? JSON.parse(localStorage.getItem('books')) : [];

navigate();
showTime();

const myBookList = new Liberary(list);
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
