export let numOfImagesOnSlide;

if (window.screen.width > 1024) {
  numOfImagesOnSlide = 4;
} else if (window.screen.width <= 1024 && window.screen.width > 768) {
  numOfImagesOnSlide = 3;
} else {
  numOfImagesOnSlide = 2;
}

export const urlHotels = new URL(
  ' https://if-student-api.onrender.com/api/hotels',
);
export const urlHotelsPopular = new URL(
  'https://if-student-api.onrender.com/api/hotels/popular',
);
