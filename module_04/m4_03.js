//Develop the app even further.
// Print the following information for all series from the search result on the web page. (7p)
// required information: Name, link to details (url), medium image and summary
// show the name in <h2> element
// show the url in <a> element. Also add target="_blank" to the link.
// show the medium image with <img src="" alt="">. Add medium image to src attribute and name property to alt attribute.

// some TV-shows don't have images. This will cause an error. You can fix this by adding ? operator to image property. Example: tvShow.show.image?.medium;. This is called optional chaining.
// show summary in <div> element (not <p>). This is because the summary is already in <p> element, and the result will not be valid if <p> is inside another <p>.
// collect the elements to <article> elements and append <article> elements to the HTML document.
// make <div id="results"> element to the HTML document where you append the <article> elements.
// clear the old results with innerHTML = '' before you append the new results.

"use strict"

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

let bigBox = document.createElement("div")
bigBox.id = "target"
document.body.appendChild(bigBox)

form.addEventListener("submit", async function fetchInfo() {
  event.preventDefault()
  let tvShow = input.value
  let response = await fetch("https://api.tvmaze.com/search/shows?q=" + tvShow)
  let jsondata = await response.json()
  console.log(jsondata)

  for (let i = 0; i < jsondata.length; i++) {
    let show = jsondata[i].show

    let article = document.createElement("article")

    let nameHeader = document.createElement("h2")
    let showName = show.name
    nameHeader.textContent = showName
    article.appendChild(nameHeader)

    let urlLink = document.createElement("a")
    let url = show.url
    urlLink.href = url
    urlLink.target = "_blank"
    article.appendChild(urlLink)

    let img = document.createElement("img")
    let imgUrl = show.image?.medium
    img.src = imgUrl
    img.alt = "No image."
    article.appendChild(img)

    let summaryText = document.createElement("div")
    let summary = show.summary
    summaryText.innerHTML = summary
    article.appendChild(summaryText)

    bigBox.appendChild(article)
  }
})



