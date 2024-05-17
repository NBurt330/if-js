import { data } from '../constants/data.js';

const getElem = document.querySelector('.homes__pictures');

let numOfImagesOnSlide;

if (window.screen.width > 1024) {
  numOfImagesOnSlide = 4;
} else if (window.screen.width <= 1024 && window.screen.width > 768) {
  numOfImagesOnSlide = 3;
} else {
  numOfImagesOnSlide = 2;
}

for (let i = 0; i < numOfImagesOnSlide; i++) {
  getElem.innerHTML +=
    `<div class="homes__picture  col-lg-3 col-md-4 col-sm-3" id="${data[i].id}"><img class="homes__images" ` +
    `src=${data[i].imageUrl} alt="${data[i].name}">` +
    `<div class="homes__name">${data[i].name}</div><div class="homes__location">${data[i].city}, ${data[i].country}</div></div>`;
}
