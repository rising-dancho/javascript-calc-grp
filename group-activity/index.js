function calculate(operator, num1, num2) {
  switch (operator) {
    case 'add':
      return num1 + num2;
    case 'sub':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return 'Cannot divide by zero!';
      }
    default:
      return 'Invalid operation!';
  }
}

console.log('Addition:', calculate('add', 5, 3));
console.log('Subtraction:', calculate('subtract', 10, 4));
console.log('Multiplication:', calculate('multiply', 2, 6));
console.log('Division:', calculate('divide', 8, 2));
