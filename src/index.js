import "./style.css";

// const hello = document.createElement("h1");
// hello.textContent = "hellow";
// document.body.appendChild(hello);

const searchBar = document.createElement("div");
searchBar.id = "search-bar";
const locationInput = document.createElement("input");
locationInput.type = "text";
locationInput.placeholder = "Digite a cidade";
const search = document.createElement("button");
search.textContent = "Buscar";

searchBar.appendChild(locationInput);
searchBar.appendChild(search);
document.body.appendChild(searchBar);

const cityName = document.createElement("h1");
cityName.id = "city-name";
document.body.appendChild(cityName);

const mainRow = document.createElement("div");
mainRow.id = "main-row";
const weatherIcon = document.createElement("img");
weatherIcon.id = "current-icon";
const currentTemp = document.createElement("div");
currentTemp.id = "current-temp";
const maxMin = document.createElement("div");
maxMin.id = "max-min";
const todayMaxTemp = document.createElement("div");
const todayMinTemp = document.createElement("div");
maxMin.appendChild(todayMaxTemp);
maxMin.appendChild(todayMinTemp);

mainRow.appendChild(weatherIcon);
mainRow.appendChild(currentTemp);
mainRow.appendChild(maxMin);
document.body.appendChild(mainRow);

async function getForecast(location) {
  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=2c503903ede24409ab9195110230808&q=" +
      location +
      "&lang=pt&days=3",
    { mode: "cors" }
  );
  console.log(response);
  const responseJson = await response.json();
  console.log(responseJson);

  cityName.textContent = responseJson.location.name;
  weatherIcon.src = responseJson.current.condition.icon;
  currentTemp.textContent = responseJson.current.temp_c + "°C";
  todayMaxTemp.textContent =
    "máx: " + responseJson.forecast.forecastday[0].day.maxtemp_c + "°C";
  todayMinTemp.textContent =
    "mín: " + responseJson.forecast.forecastday[0].day.mintemp_c + "°C";
}

search.addEventListener("click", () => {
  getForecast(locationInput.value);
});
