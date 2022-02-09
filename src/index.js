// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select the button
// const button = document.querySelector("#click-me");
// console.log(button);
// // 2. Listen to a click 
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, change content to Loading... and disable
//   const clickedElement = event.currentTarget;
//   clickedElement.innerText = "Loading...";
//   clickedElement.disabled = true;
// });

// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (input, search, results list)
const input = document.querySelector("#keyword");
const search = document.querySelector("#submit");
const results = document.querySelector("#results");

// 2. Listen to a click on the search button 
search.addEventListener("click", (event) => {
  // First, prevent default behavior (=page refresh) of the button
  event.preventDefault();
  console.log("Button Clicked!")
  console.log(event);
  // 2.5 Fetch an API (OmdbAPI)
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;
  // const result = fetch(url) NO!
  console.log("Starting to fetch (request)...")
  fetch(url)
    .then(resp => resp.json()) // json() turns the JSON into some JS object/array when response arrives
    .then((data) => {
      // Clean old movies
      results.innerHTML = "";
      // Everything below here is asynchronous, happens later
      console.log("Fetch response arrived!!")
      console.log(data.Search);
      // 3. Change the DOM, display the movies inside the results list
      const movies = data.Search;
      movies.forEach((movie) => {
        results.insertAdjacentHTML(
          "beforeend",
          `<li class='list-inline-item'>
            <img src="${movie.Poster}" alt="" />
            <p>${movie.Title}</p>
          </li>`
        );
      });
    })
    console.log("Do some other stuff after having sent the HTTP request (fetch)")
});



// //////////////////////
// HTTP POST request
// //////////////////////
const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value
  const url = "https://reqres.in/api/register";
  const data = {"email": emailValue, "password": passwordValue};

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }
  
  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp)