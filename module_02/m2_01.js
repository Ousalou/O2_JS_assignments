// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
// Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.

let numbers = []

for (let i = 0; i < 5; i++) {
  let number = parseInt(prompt("Please submit a number:"))
  numbers[i] = number
}

for (let i = 0; i < 5; i++) {
  printNumber = numbers[4-i]
  document.querySelector("#target").innerHTML += " " + printNumber
}
