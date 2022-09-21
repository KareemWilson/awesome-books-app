
let list = localStorage.books
  ? JSON.parse(localStorage.getItem('books'))
  : [];

const fetchBooks = () => {
  const bookSection = document.querySelector('.display-books');
  if (list) {
    const BooksCard = list.map(
      (book) => `<div class='${book.title} book-container'>
    <h1 class="book-title">" ${book.title} " <span class="book-author">by ${book.author}</span></h1>
    <button id=${book.title} class='btn-remove' onclick="removeBook('${book.title}')">
    remove
    </button>
    </div><hr>`,
    );
    bookSection.innerHTML = BooksCard.join('');
  }
};
fetchBooks();

const removeBook = (title) => {
  const updatedList = list.filter((book) => book.title !== title);
  list = updatedList;
  localStorage.setItem('books', JSON.stringify(list));
  fetchBooks(list);
};
removeBook();

const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBtn = document.querySelector('.btn-add');

const addBook = (obj) => {
  if (authorInput.value !== '' && titleInput.value !== '') {
    list.push(obj);
    fetchBooks(list);
    localStorage.setItem('books', JSON.stringify(list));
  }
};

const createBookObj = () => {
  const count = list.length;
  return {
    id: count + 1,
    author: authorInput.value,
    title: titleInput.value,
  };
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const currentBook = createBookObj();
  addBook(currentBook);
  authorInput.value = '';
  titleInput.value = '';
});
