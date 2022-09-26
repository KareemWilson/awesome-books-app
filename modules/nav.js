import navControl from './utils/navControl.js';

const navList = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');

const ListSection = document.querySelector('.books-section');
const AddSection = document.querySelector('.add-book-section');
const contactSection = document.querySelector('.contact-section');

const navigate = () => {
  navList.addEventListener('click', (e) => {
    e.preventDefault();
    navControl(ListSection, AddSection, contactSection);
  });

  add.addEventListener('click', (e) => {
    e.preventDefault();
    navControl(AddSection, ListSection, contactSection);
  });

  contact.addEventListener('click', (e) => {
    e.preventDefault();
    navControl(contactSection, ListSection, AddSection);
  });
};

export default navigate;