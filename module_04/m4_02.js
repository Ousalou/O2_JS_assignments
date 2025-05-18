// <form action="https://api.tvmaze.com/search/shows">
//   <input id="query" name="q" type="text">
//   <input type="submit" value="Search">
// </form>
// Test the form. The result should be a page full of JSON formatted data.

//Develop the app further.
// Add JavaScript that gets the value entered to the form
// and sends a request with fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}.
// Print the search result to the console. (3p)

let form = document.createElement("form")

let input = document.createElement("input")
input.id = "query"
input.name = "q"
input.type = "text"

let input2 = document.createElement("input")
input2.type = "submit"
input2.value = "search"

form.appendChild(input)
form.appendChild(input2)

document.body.appendChild(form)

form.addEventListener("submit", async function() {
  event.preventDefault()
  let tvShow = input.value
  let response = await fetch("https://api.tvmaze.com/search/shows?q=" +tvShow)
  let jsondata = await response.json()
  console.log(jsondata)
})
