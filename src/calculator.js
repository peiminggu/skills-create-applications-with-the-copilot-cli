/**
 * calculator.js - Node.js CLI Calculator App
 *
 * Supported operations:
 *   add        - Addition:         adds two numbers (a + b)
 *   subtract   - Subtraction:      subtracts b from a (a - b)
 *   multiply   - Multiplication:   multiplies two numbers (a * b)
 *   divide     - Division:         divides a by b (a / b); errors on division by zero
 *   modulo     - Modulo:           remainder of a divided by b (a % b); errors on b = 0
 *   exponent   - Exponentiation:   raises a to the power of b (a ** b)
 *   sqrt       - Square Root:      square root of a; errors on negative numbers
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 4 5        → 9
 *   node calculator.js subtract 10 3  → 7
 *   node calculator.js multiply 6 7   → 42
 *   node calculator.js divide 20 4    → 5
 *   node calculator.js modulo 10 3    → 1
 *   node calculator.js exponent 2 8   → 256
 *   node calculator.js sqrt 16        → 4
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
// Throws an error if b is zero to prevent modulo by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed.');
  }
  return a % b;
}

// Exponentiation: returns a raised to the power of b
function exponentiate(a, b) {
  return Math.pow(a, b);
}

// Square Root: returns the square root of a
// Throws an error if a is negative (not a real number)
function squareRoot(a) {
  if (a < 0) {
    throw new Error('Error: Square root of a negative number is not allowed.');
  }
  return Math.sqrt(a);
}

// CLI entry point
function main() {
  const [,, operation, rawA, rawB] = process.argv;

  const twoArgOps = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'exponent'];
  const oneArgOps = ['sqrt'];
  const validOps = [...twoArgOps, ...oneArgOps];

  if (!operation || !rawA) {
    console.error('Usage: node calculator.js <operation> <num1> [num2]');
    console.error(`Two-argument operations: ${twoArgOps.join(', ')}`);
    console.error(`One-argument operations: ${oneArgOps.join(', ')}`);
    process.exit(1);
  }

  if (!validOps.includes(operation)) {
    console.error(`Unknown operation "${operation}". Valid operations: ${validOps.join(', ')}`);
    process.exit(1);
  }

  const a = parseFloat(rawA);

  if (isNaN(a)) {
    console.error('Error: num1 must be a valid number.');
    process.exit(1);
  }

  // Handle single-argument operations
  if (oneArgOps.includes(operation)) {
    let result;
    try {
      result = squareRoot(a);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
    console.log(`${operation}(${a}) = ${result}`);
    return;
  }

  // Two-argument operations require rawB
  if (!rawB) {
    console.error(`Usage: node calculator.js ${operation} <num1> <num2>`);
    process.exit(1);
  }

  const b = parseFloat(rawB);

  if (isNaN(b)) {
    console.error('Error: num2 must be a valid number.');
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
    case 'modulo':
      try {
        result = modulo(a, b);
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
      break;
    case 'exponent':
      result = exponentiate(a, b);
      break;
  }

  console.log(`${a} ${operation} ${b} = ${result}`);
}

// Only run CLI when invoked directly (not when imported as a module)
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, squareRoot };
