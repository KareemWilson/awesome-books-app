const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const bookSection = document.querySelector('.display-books');

const addBook = (bookList) => {
  const currentBook = bookList.createBookObj(
    titleInput.value,
    authorInput.value,
  );
  bookList.addBook(currentBook);
  const updatedList = bookList.fetchBooks();
  bookSection.innerHTML = updatedList.join('');
  authorInput.value = '';
  titleInput.value = '';
};

export default addBook;