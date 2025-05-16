// Write a program that prompts the user for the start and end year.
// The program prints all leap years from the interval given by the user.
// Printing is done in an unordered list to the HTML document. (3p)
//
// Example output HTML code:
// <ul>
//    <li>1992</li>
//    <li>1996</li>
//    <li>2000</li>
//    <li>2004</li>
//    <li>2008</li>
// </ul>

let startYear = parseInt(prompt("What is the first year?"))
let endYear = parseInt(prompt("What is the end year?"))

let listStart = document.createElement("ul");

for (let i = startYear; i < endYear +1; i++) {
  if (i % 100 === 0) {
    if (i % 400 === 0) {
      let listItem = document.createElement("li")
      listItem.textContent = i
      listStart.appendChild(listItem);
    }
  }
  else if (i % 4 === 0) {
    let listItem = document.createElement("li")
    listItem.textContent = i
    listStart.appendChild(listItem);
  }
  else {
  }
}

document.querySelector("#target").appendChild(listStart)