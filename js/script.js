const bookSection = document.querySelector('.display-books');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.btn-add');

let list = localStorage.books ? JSON.parse(localStorage.books) : [];

function remove() {
  const removebtn = document.querySelectorAll('.remove');
  removebtn.forEach((element) => element.addEventListener('click', () => {
    const parentNodeClass = element.parentNode.className;
    element.parentNode.remove();
    list = list.filter((x) => x.book !== parentNodeClass);
  }));
  localStorage.setItem('books', JSON.stringify(list));
}

function libraryBooks(object) {
  return `<div class="${object.book}">
    <h1>${object.book}</h1>
    <p>${object.author}</p>
    <hr>
    <button class="remove" onClick=${remove()}>
    remove
    </button>
    </div>`;
}

const getBooksFromLocalStorage = () => {
  if (localStorage.books) {
    let booksArray = [];
    booksArray = JSON.parse(localStorage.books);
    booksArray.forEach((book) => bookSection.insertAdjacentHTML('beforeend', libraryBooks(book)));
  }
};

getBooksFromLocalStorage();

function add() {
  if (authorInput.value !== '' && titleInput.value !== '') {
    const currentBook = [];
    currentBook.push({
      author: authorInput.value,
      book: titleInput.value,
    });
    list.push({
      author: authorInput.value,
      book: titleInput.value,
    });
    if (list.length > 0) {
      currentBook.forEach((book) => bookSection.insertAdjacentHTML('beforeend', libraryBooks(book)));
    }
  }
  authorInput.value = '';
  titleInput.value = '';
  localStorage.setItem('books', JSON.stringify(list));
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  add();
});
