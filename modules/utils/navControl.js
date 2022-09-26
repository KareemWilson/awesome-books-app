const navControl = (show, firstHide, secondHide) => {
  show.classList.remove('d-none');
  firstHide.classList.add('d-none');
  secondHide.classList.add('d-none');
};

export default navControl;
