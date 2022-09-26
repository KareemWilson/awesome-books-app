import { titleInput, authorInput, bookSection } from './elements.js';

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