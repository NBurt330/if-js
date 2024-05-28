// lesson 14

const getElem = document.querySelector('.homes__pictures');

let numOfImagesOnSlide;

if (window.screen.width > 1024) {
  numOfImagesOnSlide = 4;
} else if (window.screen.width <= 1024 && window.screen.width > 768) {
  numOfImagesOnSlide = 3;
} else {
  numOfImagesOnSlide = 2;
}

const fetchArray = () =>
  fetch('https://if-student-api.onrender.com/api/hotels/popular')
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.error('Error!!!', e.message);
    });

function addHotels(data) {
  for (let i = 0; i < numOfImagesOnSlide; i++) {
    getElem.innerHTML +=
      `<div class="homes__picture  col-lg-3 col-md-4 col-sm-3" id="${data[i].id}"><img class="homes__images" ` +
      `src=${data[i].imageUrl} alt="${data[i].name}">` +
      `<div class="homes__name">${data[i].name}</div><div class="homes__location">${data[i].city}, ${data[i].country}</div></div>`;
  }
}

async function checkSessionStorage() {
  const dataStorage = sessionStorage.getItem('hotels');

  if (dataStorage === null) {
    const dataNewStorage = await fetchArray();
    addHotels(dataNewStorage);
    sessionStorage.setItem('hotels', JSON.stringify(dataNewStorage));
  } else {
    const dataInSessionStorage = JSON.parse(dataStorage);
    addHotels(dataInSessionStorage);
  }
}

checkSessionStorage();

//lesson 11

const formElGuests = document.querySelector('.top-search__column--guests');
const formFieldElGuests = document.querySelector('.top-search__field--guests');
const guestsFilterEl = document.querySelector('.top-search__guests-filter');
const formElChildren = document.querySelector('.top-search__children');
const formElChildrenAge = document.querySelector(
  '.top-search__children-wrapper',
);
const formElChildAge = document.querySelector('.top-search__children-option');

const disableBtn = (btn) => {
  btn.classList.add('btn-disabled');
  btn.setAttribute('disabled', true);
};

const enableBtn = (btn) => {
  btn.removeAttribute('disabled');
  btn.classList.remove('btn-disabled');
};

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

const guestFilter = (e) => {
  const click = e.target;
  if (click.type === 'button') {
    return handleBtn(click);
  }
};

const getGuestsFilterForm = () => {
  guestsFilterEl.classList.toggle('disabled');
};

formElGuests.addEventListener('click', getGuestsFilterForm);
guestsFilterEl.addEventListener('click', guestFilter);

//lesson 13
const searchBtn = document.querySelector('.top-search__button');
const placeInputEl = document.querySelector('.top-search__field--city');
const getNewElem = document.querySelector('.hotels__pictures');
const hotelsAvailableSection = document.querySelector('.hotels');

const getAvailableHotels = (event) => {
  event.preventDefault();

  fetch(
    `https://if-student-api.onrender.com/api/hotels?search=${placeInputEl.value}`,
  )
    .then((response) => response.json())

    .then((data) => {
      getNewElem
        .querySelectorAll('.hotels__picture')
        .forEach((elem) => elem.remove());

      if (data.length === 0) {
        getNewElem.innerHTML =
          '<div class="hotels__picture">No hotels found</div>';
      } else {
        const maxHotelsNumber =
          numOfImagesOnSlide < data.length ? numOfImagesOnSlide : data.length;

        for (let i = 0; i < maxHotelsNumber; i++) {
          getNewElem.innerHTML +=
            `<div class="hotels__picture  col-lg-3 col-md-4 col-sm-3" id="${data[i].id}"><img class="hotels__images" ` +
            `src=${data[i].imageUrl} alt="${data[i].name}">` +
            `<div class="hotels__name">${data[i].name}</div><div class="hotels__location">${data[i].city}, ${data[i].country}</div></div>`;
        }

        if (numOfImagesOnSlide <= maxHotelsNumber) {
          getNewElem.innerHTML += `<button class="hotels__button"></button>`;
        }
      }
      hotelsAvailableSection.classList.remove('disabled');
    })
    .catch((err) => console.log(err));
};

searchBtn.addEventListener('click', getAvailableHotels);
