/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover all arithmetic operations:
 *   - add        (addition)
 *   - subtract   (subtraction)
 *   - multiply   (multiplication)
 *   - divide     (division)
 *   - modulo     (remainder)
 *   - power      (exponentiation)
 *   - squareRoot (square root)
 *
 * Includes examples from calc-basic-operations image:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 * Includes examples from calc-extended-operations image:
 *   5 % 2, 2 ^ 3, √16
 * Plus edge cases such as division by zero, negatives, and decimals.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // Image example
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive integers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds decimals', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Image example
  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts positive integers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('result is negative when b > a', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts decimals', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe('multiply', () => {
  // Image example
  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies positive integers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test('multiplies two negative numbers gives a positive result', () => {
    expect(multiply(-4, -3)).toBe(12);
  });

  test('multiplies decimals', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplying by one returns the same number', () => {
    expect(multiply(15, 1)).toBe(15);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Image example
  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides positive integers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides and returns a decimal result', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers gives a positive result', () => {
    expect(divide(-9, -3)).toBe(3);
  });

  test('dividing by one returns the same number', () => {
    expect(divide(25, 1)).toBe(25);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Error: Division by zero is not allowed.');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Error: Division by zero is not allowed.');
  });
});

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe('modulo', () => {
  // Image example: 5 % 2 = 1
  test('5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when a is exactly divisible by b', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('works with larger dividend', () => {
    expect(modulo(17, 4)).toBe(1);
  });

  test('works with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('works with decimal numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Error: Modulo by zero is not allowed.');
  });
});

// ─── Power ───────────────────────────────────────────────────────────────────
describe('power', () => {
  // Image example: 2 ^ 3 = 8
  test('2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of zero returns 1', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('raises a number to the power of one returns itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('works with a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('works with decimal base', () => {
    expect(power(2.5, 2)).toBeCloseTo(6.25);
  });

  test('zero to any positive power is zero', () => {
    expect(power(0, 5)).toBe(0);
  });
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // Image example: √16 = 4
  test('√16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('√9 = 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('√0 = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('returns a decimal for non-perfect squares', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test('returns 1 for √1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  // Edge case: negative input
  test('throws an error for the square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Error: Square root of a negative number is not allowed.');
  });

  test('throws an error for the square root of -100', () => {
    expect(() => squareRoot(-100)).toThrow('Error: Square root of a negative number is not allowed.');
  });
});
