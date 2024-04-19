function displayUsername(response) {
  console.log(response.data.username);
}

let apiUrl = "https://jsonplaceholder.typicode.com/users/1";
axios.get(apiUrl).then(displayUsername);

function search(event) {
  event.preventDefault();
  let searchInput = documet.querySelector("#search-value-input");
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
