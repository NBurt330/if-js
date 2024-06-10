import { disableBtn, enableBtn } from '../functions/functions.js';

export const formElGuests = document.querySelector(
  '.top-search__column--guests',
);
export const guestsFilterEl = document.querySelector(
  '.top-search__guests-filter',
);

const formFieldElGuests = document.querySelector('.top-search__field--guests');
const formElChildren = document.querySelector('.top-search__children');
const formElChildrenAge = document.querySelector(
  '.top-search__children-wrapper',
);
const formElChildAge = document.querySelector('.top-search__children-option');

const handleChildrenModule = (button, inputEl) => {
  if (+inputEl.value === +inputEl.min + 1 && button.value === '+') {
    formElChildren.classList.remove('disabled');
  }

  if (+inputEl.value === +inputEl.min && button.value !== '+') {
    formElChildren.classList.add('disabled');
  }

  if (
    +inputEl.value > inputEl.min + 1 &&
    +inputEl.value <= inputEl.max &&
    button.value === '+'
  ) {
    formElChildrenAge.appendChild(formElChildAge.cloneNode(true));
  }

  if (
    +inputEl.value > inputEl.min &&
    +inputEl.value <= inputEl.max &&
    button.value !== '+'
  ) {
    formElChildrenAge.removeChild(formElChildrenAge.lastChild);
  }
};
const handleFieldGuests = () => {
  const inputs = guestsFilterEl.querySelectorAll('.top-search__guest-input');
  formFieldElGuests.value = `${inputs[0].value} Adults \u2013 ${inputs[1].value} Children \u2013 ${inputs[2].value} Room`;
};

function handleBtn(btn) {
  const input = document.querySelector(`#${btn.dataset.for}`);
  const buttons = Array.from(guestsFilterEl.querySelectorAll('[data-for]'));
  let oppositeBtn = {};

  for (let i = 0; i < buttons.length; i++)
    if (
      buttons[i].dataset.for === btn.dataset.for &&
      buttons[i].value !== btn.value
    ) {
      oppositeBtn = buttons[i];
    }

  const currentValue = +input.value;
  const minValue = +input.min;
  const maxValue = +input.max;

  if (btn.value === '+') {
    if (currentValue < maxValue) {
      input.value = currentValue + 1;
    }
    if (currentValue === minValue) {
      enableBtn(oppositeBtn);
    }
    if (currentValue === maxValue - 1) {
      disableBtn(btn);
    }
  } else {
    if (currentValue > minValue) {
      input.value = currentValue - 1;
    }

    if (currentValue === minValue + 1) {
      disableBtn(btn);
    }
    if (currentValue === maxValue) {
      enableBtn(oppositeBtn);
    }
  }

  if (btn.dataset.for === 'children-lg') {
    handleChildrenModule(btn, input);
  }
  handleFieldGuests();
}

export const guestFilter = (e) => {
  const click = e.target;
  if (click.type === 'button') {
    return handleBtn(click);
  }
};

export const getGuestsFilterForm = () => {
  guestsFilterEl.classList.toggle('disabled');
};
