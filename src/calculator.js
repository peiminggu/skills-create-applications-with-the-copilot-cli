/**
 * calculator.js - Node.js CLI Calculator App
 *
 * Supported operations:
 *   add      - Addition:       adds two numbers (a + b)
 *   subtract - Subtraction:    subtracts b from a (a - b)
 *   multiply - Multiplication: multiplies two numbers (a * b)
 *   divide   - Division:       divides a by b (a / b); errors on division by zero
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 4 5        → 9
 *   node calculator.js subtract 10 3  → 7
 *   node calculator.js multiply 6 7   → 42
 *   node calculator.js divide 20 4    → 5
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

// CLI entry point
function main() {
  const [,, operation, rawA, rawB] = process.argv;

  const validOps = ['add', 'subtract', 'multiply', 'divide'];

  if (!operation || !rawA || !rawB) {
    console.error('Usage: node calculator.js <operation> <num1> <num2>');
    console.error(`Operations: ${validOps.join(', ')}`);
    process.exit(1);
  }

  if (!validOps.includes(operation)) {
    console.error(`Unknown operation "${operation}". Valid operations: ${validOps.join(', ')}`);
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
  }

  let result;
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
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
      break;
  }

  console.log(`${a} ${operation} ${b} = ${result}`);
}

// Only run CLI when invoked directly (not when imported as a module)
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
