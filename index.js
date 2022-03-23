calculation = (num1, num2, operation) => {
  if(operation === '+') {
    return num1 + num2;
  } else if (operation === '-') {
    return num1 - num2;
  } else if (operation === '*') {
    return num1 * num2;
  } else if(operation === '/') {
    return num1 / num2;
  } else {
    return console.log('Error')
  }
}

console.log(calculation(21, 3, 'a'));