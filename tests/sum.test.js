import { sum } from '../scr/sum.js';
import { randNumber } from '@ngneat/falso';

test('sum of two numbers', () => {
  const num1 = randNumber();
  const num2 = randNumber();
  expect(sum(num1)(num2)).toBe(num1 + num2);
});
