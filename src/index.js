const input = document.querySelector("#keyword");
const search = document.querySelector("#submit");
const results = document.querySelector("#results");

const displayMovies = (movies) => {
  movies.forEach((movie) => {
    results.insertAdjacentHTML(
      "beforeend",
      `<li class='list-inline-item'>
        <img src="${movie.Poster}" alt="" />
        <p>${movie.Title}</p>
      </li>`
    );
  });
}

const fetchMovies = (keyword) => {
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(resp => resp.json()) // json() turns the JSON into some JS object/array when response arrives
    .then((data) => {
      results.innerHTML = "";
      const movies = data.Search;
      displayMovies(movies);
    })
}

const searchMovies = (event) => {
  event.preventDefault();
  fetchMovies(input.value);
}

fetchMovies("star wars");
search.addEventListener("click", searchMovies);