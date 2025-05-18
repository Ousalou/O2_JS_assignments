// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
// Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.

let numbers = []

for (i = 0; 5 < i; i++) {
  let number = parseInt(prompt("Please submit a number:"))
  numbers[i] = number
}

numbers.sort((a, b) => a - b);

document.createElement("#target").innerHTML = numbers
