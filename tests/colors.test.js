/**
 * @jest-environment jsdom
 */

import { getColor } from '../scr/colors.js';
import { colors } from '../scr/main.js';

test('After first click expect color magenta', () => {
  document.body.innerHTML = `
   <p id="text1">Text 1</p>
   <p id="text2">Text 2</p>
   <p id="text3">Text 3</p>
    `;

  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const paragraph = [text1, text2, text3];

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].click();
    paragraph[i].addEventListener('click', getColor(paragraph[i]));
    paragraph[i].click();
    expect(paragraph[i].style.color).toBe(colors[0]);
  }
});
