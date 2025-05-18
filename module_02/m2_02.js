// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)
"use strict";

let participantAmount = parseInt(prompt("How many participants?"))

let names = []

for (let i = 0; i < participantAmount; i++) {
  let name = prompt("Please give the name of participant number " + i + 1 + ":")
  names[i] = name
}

names.sort()

let organizedList = document.createElement("ol")

for (let i = 0; i < participantAmount; i++) {
  let listName = names[i]
  let participant = document.createElement("li");
  participant.textContent = listName
  organizedList.appendChild(participant)
}
document.querySelector("#target").appendChild(organizedList)



