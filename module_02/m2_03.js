//Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

let dogs = []

for (let i = 0; i < 6; i++) {
  dogName = prompt("What is the name of your dog?")
  dogs[i] = dogName
}

dogs.sort()
dogs.reverse()

dogList = document.createElement("ul")

for (let i = 0; i < dogs.length; i++) {
  dog = dogs[i]
  let dogToList = document.createElement("li");
  dogToList.textContent = dog
  dogList.appendChild(dogToList)
}

document.querySelector("#target").appendChild(dogList)