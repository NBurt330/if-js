import { colors } from './main.js';

export function getColor(e) {
  let counter = 0;
  return function () {
    if (counter >= colors.length) {
      counter = 0;
    }
    e.style.color = colors[counter];
    counter++;
    return e.style.color;
  };
}
