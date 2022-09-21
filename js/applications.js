import { addBook, createBookObj } from "./classes";

const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.btn-add');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const currentBook = createBookObj();
  addBook(currentBook);
  authorInput.value = '';
  titleInput.value = '';
});
