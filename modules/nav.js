import navControl from './utils/navControl.js';
import {
  navList,
  add,
  contact,
  ListSection,
  AddSection,
  contactSection,
} from './utils/elements.js';

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
