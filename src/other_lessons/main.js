import { changeDateFormat, sum } from './sum.js';
import { getColor } from './colors.js';
import { hotels } from './constants/hotels.js';
import { data } from './constants/data.js';
import { obj1, obj2, obj3 } from './constants/objects.js';
import { Students } from './entities/students.js';
import { User } from './entities/user.js';
import { Student } from './entities/student.js';

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

let date = '2020-11-26';
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

let daysInMonth = 30;
let daysInWeek = 7;
let dayOfWeek = 4;
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);
console.log(calendarMonth);

console.log('----------------------------------------');

console.log('Lesson 7');
console.log('----------------------------');

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  if (keys1.sort().join() !== keys2.sort().join()) {
    return false;
  }

  for (const key in obj1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (typeof val1 !== 'object' && typeof val2 !== 'object' && val1 !== val2) {
      return false;
    }

    if (
      (typeof val1 == 'object' || typeof val2 == 'object') &&
      !deepEqual(val1, val2)
    ) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log('----------------------------');

function getCalendarMonthNew(
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  checkInDate,
  checkOutDate,
) {
  if (dayOfWeek > 30 || dayOfWeek >= daysInWeek) {
    return 'Wrong date';
  } else {
    const numOfWeeks = Math.ceil((daysInMonth + dayOfWeek) / daysInWeek);

    let calendarMonth = [];
    let count = daysInMonth - dayOfWeek + 1;

    for (let i = 0; i < numOfWeeks * daysInWeek; i++) {
      const currentDayOfMonth = {};

      if (count <= daysInMonth) {
        currentDayOfMonth.dayOfMonth = count;
        currentDayOfMonth.notCurrentMonth = true;
      } else if (count > 2 * daysInMonth) {
        currentDayOfMonth.dayOfMonth = count - 2 * daysInMonth;
        currentDayOfMonth.dayOfMonth < daysInWeek
          ? (currentDayOfMonth.notCurrentMonth = true)
          : (currentDayOfMonth.notCurrentMonth = false);
      } else {
        currentDayOfMonth.dayOfMonth = count - 30;
        currentDayOfMonth.notCurrentMonth = false;
      }

      currentDayOfMonth.selectedDay =
        currentDayOfMonth.notCurrentMonth === false &&
        (currentDayOfMonth.dayOfMonth === checkInDate ||
          currentDayOfMonth.dayOfMonth === checkOutDate);

      count++;

      calendarMonth = [...calendarMonth, currentDayOfMonth];
    }
    return calendarMonth;
  }
}

daysInMonth = 30;
daysInWeek = 7;
dayOfWeek = 4;
let checkInDate = 5;
let checkOutDate = 8;
console.log(
  getCalendarMonthNew(
    daysInMonth,
    daysInWeek,
    dayOfWeek,
    checkInDate,
    checkOutDate,
  ),
);

console.log('----------------------------------------');

console.log('Lesson 8');
console.log('----------------------------');

const user1 = new User('Ivan', 'Petrov');
console.log(user1);
const student1 = new Student('Ivan', 'Petrov', 2020, 'Java Script');
console.log(student1);

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

const students = new Students(studentsData);
console.log(students.getInfo);

console.log('----------------------------------------');

console.log('Lesson 9');
console.log('----------------------------');

const newText1 = document.getElementById('newText1');
const newText2 = document.getElementById('newText2');
const newText3 = document.getElementById('newText3');
const newParagraph = [newText1, newText2, newText3];

const newColors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    let i = 0;
    const next = () => {
      if (i < this.data.length) {
        const value = this.data[i++];
        return { value, done: false };
      }

      if (i === this.data.length) {
        i = 0;
        const value = this.data[i++];
        return { value, done: false };
      }

      return { done: true };
    };

    return { next };
  },
};

for (const text of newParagraph) {
  const colorsIterator = newColors[Symbol.iterator]();

  if (text) {
    text.onclick = function () {
      text.style.color = colorsIterator.next().value;
    };
  }
}

console.log('----------------------------');

function newGetCalendarMonth(date, checkInDate, checkOutDate) {
  let tempDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = tempDate.getDate();

  tempDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = tempDate.getDay();

  const daysInWeek = 7;

  const numOfWeeks = Math.ceil((daysInMonth + dayOfWeek) / daysInWeek);

  let calendarMonth = [];

  if (dayOfWeek !== 0) {
    tempDate = new Date(date.getFullYear(), date.getMonth(), 0);
    let count = tempDate.getDate() - dayOfWeek + 1;

    for (let i = 0; i <= dayOfWeek - 1; i++) {
      const currentDayOfMonth = {};
      currentDayOfMonth.dayOfMonth = count;
      currentDayOfMonth.notCurrentMonth = true;
      currentDayOfMonth.selectedDay = false;
      currentDayOfMonth.currentDay = false;
      calendarMonth = [...calendarMonth, currentDayOfMonth];
      count++;
    }
  }

  let count = 1;
  for (let i = 0; i <= daysInMonth - 1; i++) {
    const currentDayOfMonth = {};
    currentDayOfMonth.dayOfMonth = count;
    currentDayOfMonth.notCurrentMonth = false;
    currentDayOfMonth.selectedDay =
      currentDayOfMonth.dayOfMonth === checkInDate ||
      currentDayOfMonth.dayOfMonth === checkOutDate;
    currentDayOfMonth.currentDay = count === date.getDate();
    count++;
    calendarMonth = [...calendarMonth, currentDayOfMonth];
  }

  count = 1;
  if (numOfWeeks * daysInWeek > daysInMonth + dayOfWeek - 1) {
    for (
      let i = 0;
      i < numOfWeeks * daysInWeek - daysInMonth - dayOfWeek;
      i++
    ) {
      const currentDayOfMonth = {};
      currentDayOfMonth.dayOfMonth = count;
      currentDayOfMonth.notCurrentMonth = true;
      currentDayOfMonth.selectedDay = false;
      currentDayOfMonth.currentDay = false;
      count++;
      calendarMonth = [...calendarMonth, currentDayOfMonth];
    }
  }

  return calendarMonth;
}

date = new Date();
checkInDate = 5;
checkOutDate = 8;
console.log(newGetCalendarMonth(date, checkInDate, checkOutDate));

function checkBracesSyntax(inputString) {
  const stack = [];
  const openingBrace = '{';
  const closingBrace = '}';

  for (const value of inputString) {
    if (openingBrace.includes(value)) {
      stack.push(value);
    } else if (closingBrace.includes(value)) {
      if (stack.length === 0 || stack[stack.length - 1] !== '{') {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

let inputString = '{user: {name: "John", age: 21}}';
console.log(checkBracesSyntax(inputString));

inputString = '{user: {name: }{"John", age: 21{}}';
console.log(checkBracesSyntax(inputString));
