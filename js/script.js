const bookSection = document.querySelector(".display-books");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const addBtn = document.querySelector(".btn-add");

const generateBookCard = () => {
  const title = document.createElement("p");
  const author = document.createElement("p");
  const removeBtn = document.createElement("button");
  
  title.setAttribute("class", "title");
  author.setAttribute("class", "author");
  removeBtn.setAttribute("class", "btn-remove");

  bookSection.append(title, author, removeBtn);

  title.innerHTML = titleInput.value;
  author.innerHTML = authorInput.value;
  removeBtn.innerHTML = "Remove";

  removeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    bookSection.remove(title,author,removeBtn)
  })
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateBookCard()
  
});

