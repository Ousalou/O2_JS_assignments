// Open t3 folder in your IDE/editor. Add HTML by using innerHTML property. (2p)
// Add the following HTML code to the element with id="target". Add the values from 'names' array to the <li> elements in a for-loop.
// <li>John</li>
// <li>Paul</li>
// <li>Jones</li>

'use strict';
const names = ['John', 'Paul', 'Jones'];

let ul = document.getElementById("target")

for (let i = 0; i < names.length; i++) {
  let name = document.createElement("li")
  name.textContent = names[i]
  ul.appendChild(name)
}
