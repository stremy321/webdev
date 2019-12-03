const readline = require("readline-sync")

sum(num1, num2) {
  return num1 + num2
}
var result = sum(50, 5)
console.log(result)

function multiply(num1, num2){
  return num1 * num2
}
var result = multiply(5, 5)
console.log(result)

function subtract(num1, num2){
  return num1 - num2
}
var result = subtract(35, 15)
console.log(result)

function divide(num1, num2){
  return num1 / num2
}
var result = divide(40, 15)
console.log(result)

var  num= Number(readlineSync.question('What is the first number to be added? '));
var  num= Number(readlineSync.question('What is the second number to add to the first? '));

