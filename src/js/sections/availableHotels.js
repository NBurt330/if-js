import { numOfImagesOnSlide, urlHotels } from '../constants/constants.js';

export const searchBtn = document.querySelector('.top-search__button');
const placeInputEl = document.querySelector('.top-search__field--city');
const getNewElem = document.querySelector('.hotels__pictures');
const hotelsAvailableSection = document.querySelector('.hotels');
const adultsInputEL = document.getElementById('adults-lg');
const roomsInputEL = document.getElementById('rooms-lg');

const searchChildrenParamsString = () => {
  const childrenInputEL = document.querySelectorAll(
    '.top-search__children-option',
  );
  const arr = [];
  Array.from(childrenInputEL).forEach((item) => arr.push(item.value));
  return arr.join(',');
};

const searchUrlHotels = (url) => {
  url.searchParams.set('search', `${placeInputEl.value}`);
  url.searchParams.set('adults', `${adultsInputEL.value}`);
  url.searchParams.set('children', searchChildrenParamsString());
  url.searchParams.set('rooms', `${roomsInputEL.value}`);
  return url;
};

export const getAvailableHotels = (event) => {
  event.preventDefault();

  fetch(searchUrlHotels(urlHotels))
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
