//Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)

let number
let numberList = []

while (true) {
  number = parseInt(prompt("Please give me a number:"))
  if (number === 0) {
    break
  }
  else {
    numberList.push(number)
  }
}

numberList.sort((a,b) => b-a)

for (i = 0; i < numberList.length; i++) {
  console.log(numberList[i]);
}

