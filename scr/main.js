import { sum } from './sum.js';
import { getColor } from './colors.js';
import { changeDateFormat } from './sum.js';

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

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

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

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

function newStringSearch(str) {
  const result = [];
  hotels.forEach((arr) => {
    const itemSearch = `${arr.country}, ${arr.city}, ${arr.name}`;
    if (itemSearch.includes(str)) {
      result.push(itemSearch);
    }
  });
  return result;
}

str = 'USA';
console.log('Поиск по слову', str, newStringSearch(str));
console.log('----------------------------');

function matchCountryWithCities(arr) {
  const result = {};
  arr.forEach((arr) => {
    const { country, city } = arr;
    if (result[country]) {
      result[country].push(city);
    } else {
      result[country] = [city];
    }
  });
  return result;
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
