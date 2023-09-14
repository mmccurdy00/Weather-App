let now = new Date();
let currentDay = document.querySelector("#current-day");
let currentTime = document.querySelector("#current-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
currentDay.innerHTML = `${day}`;
currentTime.innerHTML = `${now.getHours()}:${now.getMinutes()}`;

function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let searchInput = document.querySelector("#search");
  if (searchInput.value) {
    h1.innerHTML = `~${searchInput.value}~`;
  } else {
    h1.innerHTML = null;
  }
  return searchInput.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", myFunction);

function degreesF(event) {
  let newOne = document.querySelector("#temperature");
  newOne.innerHTML = "101°";
}
let fahren = document.querySelector("#f");
fahren.addEventListener("click", degreesF);

function degreesC(event) {
  let newTwo = document.querySelector("#temperature");
  newTwo.innerHTML = "38°";
}
let cel = document.querySelector("#c");
cel.addEventListener("click", degreesC);

function myFunction(event) {
  event.preventDefault();
  let x = document.querySelector("#search").value;
  function displayWeather(response) {
    let weather = document.querySelector("#temperature");
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    weather.innerHTML = `${temperature}°C <br /> ${description}`;
    let h1 = document.querySelector("h1");
    h1.innerHTML = `~${response.data.name}~`;
  }
  let searchInput = document.querySelector("#search-input").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=197ef3a642b76eef90e131866f74a0a0&units=metric`;
  axios.get(url).then(displayWeather);
}
