//Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given and stops its operation and
// then prints all the given numbers to the console in ascending order. (2p)
'use strict'

let numberSame = false
let numberList = []

while (numberSame === false) {
  let number = parseInt(prompt("Please give me a number:"))
  if (numberList.includes(number)) {
    numberSame = true
  }
  else {
  numberList.push(number) }
}

numberList.sort((a, b) => a - b);

for (let i = 0; i < numberList.length; i++) {
  console.log(numberList[i]);
}
