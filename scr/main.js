import { sum } from './sum.js';
import { getColor } from './colors.js';

console.log('Lesson 2');
console.log('----------------------------');

let user = 'John Doe';
console.log(user);
const student = 'Natallia Burtina';
console.log(student);
user = student; //expected outcome: Natallia Burtina
console.log(user);
console.log('----------------------------');

let test = 1;
test += '1'; //expected outcome: 11
console.log(test);
test -= 1; //expected outcome: 10
console.log(test);
test = Boolean(test); // expected outcome: true
console.log(test);
console.log('----------------------------');

let num = [2, 3, 5, 8];
let product = 1;

for (let i = 0; i < num.length; i++) {
  product = product * num[i];
}

console.log('Произведение элементов этого массива равно', product);
console.log('----------------------------');

num = [2, 5, 8, 15, 0, 6, 20, 3];
console.log('Элементы массива, которые больше 5-ти, но меньше 10-ти:');

for (let i = 0; i < num.length; i++) {
  if (num[i] > 5 && num[i] < 10) {
    console.log(num[i]);
  }
}

console.log('----------------------------');

num = [2, 5, 8, 15, 0, 6, 20, 3];
console.log('Четные элементы массива:');

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(num[i]);
  }
}

console.log('----------------------------------------');

console.log('Lesson 3');
console.log('----------------------------');
function palindrome(word) {
  let word1 = '';

  for (let i = 0; i < word.length; i++) {
    word1 += word[word.length - 1 - i];
  }

  if (word === word1) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(palindrome('racecar'));
console.log('----------------------------');

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log('Меньшее из чисел', min(5, 7));

function minWithTernaryOperator(a, b) {
  return a < b ? a : b;
}

console.log('Меньшее из чисел', minWithTernaryOperator(5, 7));
console.log('----------------------------');

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log('Большее из чисел', max(5, 7));

function maxWithTernaryOperator(a, b) {
  return a > b ? a : b;
}

console.log('Большее из чисел', maxWithTernaryOperator(5, 7));
console.log('----------------------------');

const arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}

console.log('Начальный массив ', arr);

function replaceZeroWithString(arr) {
  for (let i = 0; i < 10; i++) {
    arr[i] = arr[i] + '';
    arr[i] = arr[i].replace(0, 'zero');
    arr[i] = arr[i].replace(0, 'zero');
    if (arr[i].includes('zero') === false) {
      arr[i] = Number(arr[i]);
    }
  }
  return arr;
}

console.log('Полученный массив ', replaceZeroWithString(arr));

console.log('----------------------------------------');

console.log('Lesson 4');
console.log('----------------------------');

console.log('Суммва двух чисел равна ', sum(5)(2)); // 7
console.log('----------------------------');

export const colors = [
  'magenta',
  'cyan',
  'firebrick',
  'springgreen',
  'skyblue',
];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const paragraph = [text1, text2, text3];

for (let i = 0; i <= paragraph.length; i++) {
  if (paragraph[i]) {
    paragraph[i].addEventListener('click', getColor(paragraph[i]));
  }
}
