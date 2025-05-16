// Write a program that prompts for three integers.
// The program prints the sum, product and average of the numbers to the HTML document. (3p)
// Remember to convert strings to numbers when adding them together.

let number1 = parseInt(prompt(("Please type in a number:")))
let number2 = parseInt(prompt(("Please type in a number:")))
let number3 = parseInt(prompt(("Please type in a number:")))
const sum = number1 + number2 + number3
const product = number1 * number2 * number3
const average = (number1 + number2 + number3) / 3

document.querySelector('#target').innerHTML = (sum + " " + product + " " + average)
