function calculate(operator, num1, num2) {
  switch (operator) {
    case 'add':
      return num1 + num2;
  }
}

console.log('Addition:', calculate('add', 5, 3));
console.log('Subtraction:', calculate('subtract', 10, 4));
console.log('Multiplication:', calculate('multiply', 2, 6));
console.log('Division:', calculate('divide', 8, 2));
