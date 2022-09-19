const bookSection = document.querySelector(".display-books");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const addBtn = document.querySelector(".btn-add");

// const form = document.querySelector('.form');
// const library = document.querySelector('.library');
// const Author = document.querySelector('.author');
// const title = document.querySelector('.title');

let list = JSON.parse(localStorage.books) || [];

const getBooksFromLocalStorage = () => {

  if (localStorage.books) {
  let booksArray = [];
    booksArray = JSON.parse(localStorage.books)
    console.log(booksArray)
    booksArray.forEach((book) => bookSection.insertAdjacentHTML('beforeend', libraryBooks(book)));
  } else {
    console.log("books does not exist")
  }
}

getBooksFromLocalStorage();

function libraryBooks(object) {
  return `<div class="${object.author}">
    <h1>${object.book}</h1>
    <p>${object.author}</p>
    <hr>
    <button class="remove">
    remove
    </button>
    </div><br><br>`;
}