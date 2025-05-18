// Make an app that retrieves information about a TV series you enter and displays it in the console. (2p)
// API to use: TVMaze API
// First, make a valid HTML page with a search form. Example form:
// <form action="https://api.tvmaze.com/search/shows">
//   <input id="query" name="q" type="text">
//   <input type="submit" value="Search">
// </form>
// Test the form. The result should be a page full of JSON formatted data.

let form = document.createElement("form")
form.action = "https://api.tvmaze.com/search/shows"

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

