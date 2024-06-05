import {
  numOfImagesOnSlide,
  urlHotelsPopular,
} from '../constants/constants.js';
import { fetchArray, sortByBubbleSort } from '../functions/functions.js';

const getElem = document.querySelector('.homes__pictures');

function addHotels(data) {
  for (let i = 0; i < numOfImagesOnSlide; i++) {
    getElem.innerHTML +=
      `<div class="homes__picture  col-lg-3 col-md-4 col-sm-3" id="${data[i].id}"><img class="homes__images" ` +
      `src=${data[i].imageUrl} alt="${data[i].name}">` +
      `<div class="homes__name">${data[i].name}</div><div class="homes__location">${data[i].city}, ${data[i].country}</div></div>`;
  }
}

export async function checkSessionStorage() {
  const dataStorage = sessionStorage.getItem('hotels');

  if (dataStorage === null) {
    const dataNewStorage = await fetchArray(urlHotelsPopular);
    const sortingDataNewStorage = sortByBubbleSort(dataNewStorage);
    addHotels(sortingDataNewStorage);
    sessionStorage.setItem('hotels', JSON.stringify(sortingDataNewStorage));
  } else {
    const dataInSessionStorage = JSON.parse(dataStorage);
    addHotels(dataInSessionStorage);
  }
}
