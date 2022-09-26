import { DateTime } from '../node_modules/luxon/src/luxon.js';

const time = document.querySelector('.time');

const showTime = () => {
  const dt = DateTime.utc();
  time.innerHTML = dt;
};

export default showTime;
