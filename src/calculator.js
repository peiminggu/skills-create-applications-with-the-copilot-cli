/**
 * calculator.js - Node.js CLI Calculator App
 *
 * Supported operations:
 *   add        - Addition:         adds two numbers (a + b)
 *   subtract   - Subtraction:      subtracts b from a (a - b)
 *   multiply   - Multiplication:   multiplies two numbers (a * b)
 *   divide     - Division:         divides a by b (a / b); errors on division by zero
 *   modulo     - Modulo:           returns remainder of a divided by b (a % b); errors on zero
 *   power      - Exponentiation:   raises base to exponent (base ** exponent)
 *   squareRoot - Square Root:      returns square root of n; errors on negative numbers
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 4 5           → 9
 *   node calculator.js subtract 10 3     → 7
 *   node calculator.js multiply 6 7      → 42
 *   node calculator.js divide 20 4       → 5
 *   node calculator.js modulo 10 3       → 1
 *   node calculator.js power 2 8         → 256
 *   node calculator.js squareRoot 9      → 3
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Division by zero is not allowed.');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed.');
  }
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Square root of a negative number is not allowed.');
  }
  return Math.sqrt(n);
}

// CLI entry point
function main() {
  const [,, operation, rawA, rawB] = process.argv;

  const singleArgOps = ['squareRoot'];
  const validOps = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'power', 'squareRoot'];

  if (!operation || !rawA) {
    console.error('Usage: node calculator.js <operation> <num1> [num2]');
    console.error(`Operations: ${validOps.join(', ')}`);
    process.exit(1);
  }

  if (!validOps.includes(operation)) {
    console.error(`Unknown operation "${operation}". Valid operations: ${validOps.join(', ')}`);
    process.exit(1);
  }

  if (!singleArgOps.includes(operation) && !rawB) {
    console.error(`Usage: node calculator.js ${operation} <num1> <num2>`);
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = rawB !== undefined ? parseFloat(rawB) : undefined;

  if (isNaN(a) || (b !== undefined && isNaN(b))) {
    console.error('Error: Arguments must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'power':
        result = power(a, b);
        break;
      case 'squareRoot':
        result = squareRoot(a);
        break;
    }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  if (singleArgOps.includes(operation)) {
    console.log(`${operation}(${a}) = ${result}`);
  } else {
    console.log(`${a} ${operation} ${b} = ${result}`);
  }
}

// Only run CLI when invoked directly (not when imported as a module)
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
