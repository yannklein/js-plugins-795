import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'input', 'results' ]

  connect() {
    this.fetchMovies("star wars")
  }

  displayMovies(movies) {
    movies.forEach((movie) => {
      this.resultsTarget.insertAdjacentHTML(
        "beforeend",
        `<li class='list-inline-item'>
          <img width=100 src="${movie.Poster}" alt="" />
        </li>`
      )
    })
  }

  fetchMovies(keyword) {
    const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`
    fetch(url)
      .then(resp => resp.json()) // json() turns the JSON into some JS object/array when response arrives
      .then((data) => {
        this.resultsTarget.innerHTML = ""
        const movies = data.Search
        this.displayMovies(movies)
      })
  }

  searchMovies(event) {
    event.preventDefault()
    this.fetchMovies(this.inputTarget.value)
  }
}

// Transformed into TARGETS
// const input = document.querySelector("#keyword")
// const search = document.querySelector("#submit")
// const results = document.querySelector("#results")

// Transformed in an ACTION
// search.addEventListener("click", searchMovies)