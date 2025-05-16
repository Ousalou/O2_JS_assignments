// Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
//
// Prime numbers are numbers that are only divisible by 1 and itself.
// For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
// On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
// Print the result on the HTML document.

// Pythonista:
// nelio_juuri = int(math.sqrt(luku))
// for i in range (2, nelio_juuri + 1):
//    if luku % i == 0:
//     on_alkuluku = False
//     break

let promptInteger = parseInt(prompt("Give me a number:"))

let squareInteger = Math.sqrt(promptInteger)

let isAlkuluku = true

for (let i = 2; i < squareInteger + 1; i++) {
  if (promptInteger % i === 0) {
    isAlkuluku = false
    break
  }
  else {
    isAlkuluku = true
  }
}

if (isAlkuluku === false) {
  document.querySelector("#target").innerHTML = ("Luku ei ole alkuluku!")
}

else if (isAlkuluku === true) {
  document.querySelector("#target").innerHTML = ("Luku on alkuluku!")
}