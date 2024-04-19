function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
}
let city = "Sydney";
let apiKey = "0adcb4fbfo8d4aa6a3f1c1c5t607f7eb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(displayTemperature);
