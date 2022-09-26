import { DateTime } from '../node_modules/luxon/src/luxon.js';
import { time } from './utils/elements.js';

const showTime = () => {
  const dt = DateTime.utc();
  time.innerHTML = dt;
};

export default showTime;
