import { changeDateFormat, sum } from './sum.js';
import { getColor } from './colors.js';
import { hotels } from './constants/hotels.js';
import { data } from './constants/data.js';

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

console.log('Сумма двух чисел равна ', sum(5)(2)); // 7
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

console.log('----------------------------------------');

console.log('Lesson 5');
console.log('----------------------------');

const date = '2020-11-26';
console.log('Введенная дата', date);
console.log('Дата в новом формате', changeDateFormat(date));
console.log('----------------------------');

function stringSearch(str) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const itemSearch = `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;

    if (itemSearch.includes(str)) {
      result.push(itemSearch);
    }
  }

  return result.length > 0 ? result : 'No matches';
}

let str = 'Berlin';
console.log('Поиск по слову', str, stringSearch(str));

console.log('----------------------------------------');

console.log('Lesson 6');
console.log('----------------------------');

function palindromeNew(word) {
  return word === word.split().reverse().join();
}

const word = 'шалаш';
console.log(`Является ли слово ${word} палиндромом:`, palindromeNew(word));
console.log('----------------------------');

function newStringSearch(str) {
  const result = hotels.filter((elem) =>
    `${elem.country}, ${elem.city}, ${elem.name}`.includes(str),
  );

  let resultStr = [];

  result.forEach(
    (elem) =>
      (resultStr = [
        ...resultStr,
        `${elem.country}, ${elem.city}, ${elem.name}`,
      ]),
  );

  return resultStr;
}

str = 'USA';
console.log('Поиск по слову', str, newStringSearch(str));
console.log('----------------------------');

function matchCountryWithCities(arr) {
  return arr.reduce((acc, elem) => {
    if (Object.keys(acc).includes(elem.country)) {
      acc[elem.country] = [...acc[elem.country], elem.city];
      return acc;
    } else {
      acc[elem.country] = [elem.city];
      return acc;
    }
  }, []);
}

console.log(
  'Уникальные страны и сопоставимые с ними города',
  matchCountryWithCities(hotels),
);
console.log('----------------------------');

function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
  let numOfWeeks = 0;

  if (dayOfWeek > 30 || dayOfWeek >= daysInWeek) {
    return 'Wrong date';
  } else {
    numOfWeeks = Math.ceil((daysInMonth + dayOfWeek) / daysInWeek);
    let result = [];
    let count = daysInMonth - dayOfWeek + 1;

    for (let i = 0; i < numOfWeeks; i++) {
      const numOfWeek = [];

      for (let j = 0; j < daysInWeek; j++) {
        count <= daysInMonth
          ? numOfWeek.push(count)
          : numOfWeek.push(count - 30);
        count++;

        if (count >= 2 * daysInMonth) {
          count = count - daysInMonth;
        }
      }

      result = [...result, numOfWeek];
    }

    return result;
  }
}

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4;
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);
console.log(calendarMonth);

console.log('----------------------------');
