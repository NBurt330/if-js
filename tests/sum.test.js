import { sum } from '../scr/sum.js';
import { randNumber } from '@ngneat/falso';
import { changeDateFormat } from '../scr/sum.js';

test('sum of two numbers', () => {
  const num1 = randNumber();
  const num2 = randNumber();
  expect(sum(num1)(num2)).toBe(num1 + num2);
});

test('format of date should be day.month.year', () => {
  const day = randNumber({ min: 1, max: 31 });
  const month = randNumber({ min: 1, max: 12 });
  const year = randNumber({ min: 1, max: 2024 });
  const date = year + '-' + month + '-' + day;
  const newDate = changeDateFormat(date);
  const testDate = newDate.split('.');
  expect(Number(testDate[0])).toBeGreaterThanOrEqual(1);
  expect(Number(testDate[0])).toBeLessThanOrEqual(31);
  expect(Number(testDate[1])).toBeGreaterThanOrEqual(1);
  expect(Number(testDate[1])).toBeLessThanOrEqual(12);
  expect(Number(testDate[2])).toBeGreaterThanOrEqual(1);
  expect(Number(testDate[2])).toBeLessThanOrEqual(2024);
});
