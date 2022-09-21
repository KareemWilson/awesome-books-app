import { Liberary } from "./class.js";

const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.btn-add');
let list = localStorage.books
  ? JSON.parse(localStorage.getItem('books'))
  : [];

window.removeBook = function removeBook(title){
  myBookList.removeBook(title)
  const updatedList = myBookList.fetchBooks()
  bookSection.innerHTML = updatedList.join('');
}

const myBookList = new Liberary(list)
console.log(myBookList);
const bookSection = document.querySelector('.display-books');
const booksCards = myBookList.fetchBooks()
bookSection.innerHTML = booksCards.join('');


addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const currentBook = myBookList.createBookObj(titleInput.value, authorInput.value);
  myBookList.addBook(currentBook);
  const updatedList = myBookList.fetchBooks()
  bookSection.innerHTML = updatedList.join('');
  authorInput.value = '';
  titleInput.value = '';
});

// const removeBtns = document.querySelectorAll('.btn-remove')

// removeBtns.forEach((btn) => {
//   console.log(btn)
//   btn.onclick((e) => {
//     console.log('hi from obj')
//     myBookList.removeBook(btn.id)
//     const updatedList = myBookList.fetchBooks()
//     console.log(updatedList, btn.id);
//     bookSection.innerHTML = updatedList.join('');  
//   })
// })
