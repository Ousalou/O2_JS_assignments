//Open t2 folder in your IDE/editor.
// Add HTML by using createElement() and appendChild methods. (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-item to the second list item

let name
let ul = document.getElementById("target")

function list(name) {
  let listItem = document.createElement("li")
  listItem.textContent = name
  ul.appendChild(listItem)
}

function listAndStyle(name) {
  let listItem = document.createElement("li")
  listItem.textContent = name
  listItem.classList.add("my-item")
  ul.appendChild(listItem)
}

list("First item")
listAndStyle("Second item")
list("Third item")
