import { checkSessionStorage } from './sections/homesGuestsLoves.js';
import {
  formElGuests,
  guestsFilterEl,
  getGuestsFilterForm,
  guestFilter,
} from './formFilter/formFilter.js';
import { searchBtn, getAvailableHotels } from './sections/availableHotels.js';

checkSessionStorage();

formElGuests.addEventListener('click', getGuestsFilterForm);
guestsFilterEl.addEventListener('click', guestFilter);

searchBtn.addEventListener('click', getAvailableHotels);
