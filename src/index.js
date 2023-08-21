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
// mainRow.id = "main-row";
mainRow.classList.add("row");
const weatherIcon = document.createElement("img");
weatherIcon.id = "current-icon";
const currentTemp = document.createElement("div");
currentTemp.id = "current-temp";
const maxMin = document.createElement("div");
maxMin.classList.add("max-min");
const todayMaxTemp = document.createElement("div");
const todayMinTemp = document.createElement("div");
maxMin.appendChild(todayMaxTemp);
maxMin.appendChild(todayMinTemp);

mainRow.appendChild(weatherIcon);
mainRow.appendChild(currentTemp);
mainRow.appendChild(maxMin);
document.body.appendChild(mainRow);

const condition = document.createElement("div");
condition.classList.add("info");
document.body.appendChild(condition);

const conditionDay = document.createElement("div");
conditionDay.classList.add("info");
document.body.appendChild(conditionDay);

const chanceOfRain = document.createElement("div");
chanceOfRain.classList.add("info");
document.body.appendChild(chanceOfRain);

const precipitation = document.createElement("div");
precipitation.classList.add("info");
document.body.appendChild(precipitation);

const slider = document.createElement("div");
slider.classList.add("slider");
slider.classList.add("snap");

for (var i = 0; i <= 23; i++) {
  const hourElement = document.createElement("div");
  hourElement.classList.add("slider-element");
  hourElement.dataset.hour = i;
  const time = document.createElement("span");
  time.classList.add("time");
  const icon = document.createElement("img");
  const temp = document.createElement("span");
  temp.classList.add("temp");
  hourElement.appendChild(time);
  hourElement.appendChild(icon);
  hourElement.appendChild(temp);
  slider.appendChild(hourElement);
}

document.body.appendChild(slider);

const tomorrowTitle = document.createElement("h3");
tomorrowTitle.classList.add("tomorrow-title");
document.body.appendChild(tomorrowTitle);

const tomorrowRow = document.createElement("div");
tomorrowRow.classList.add("row");
const tomorrowIcon = document.createElement("img");
const tomorrowCondition = document.createElement("div");
const tomorrowMaxMin = document.createElement("div");
tomorrowMaxMin.classList.add("max-min");
const tomorrowMax = document.createElement("div");
const tomorrowMin = document.createElement("div");
tomorrowMaxMin.appendChild(tomorrowMax);
tomorrowMaxMin.appendChild(tomorrowMin);

tomorrowRow.appendChild(tomorrowIcon);
tomorrowRow.appendChild(tomorrowCondition);
tomorrowRow.appendChild(tomorrowMaxMin);
document.body.appendChild(tomorrowRow);

const tomorrowRainChance = document.createElement("div");
tomorrowRainChance.classList.add("info");
const tomorrowRain = document.createElement("div");
tomorrowRain.classList.add("info");
document.body.appendChild(tomorrowRainChance);
document.body.appendChild(tomorrowRain);

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
  return responseJson;
}

function printForecast(responseJson) {
  cityName.textContent = responseJson.location.name;
  weatherIcon.src = responseJson.current.condition.icon;
  currentTemp.textContent = responseJson.current.temp_c + "°C";
  todayMaxTemp.textContent =
    "máx: " + responseJson.forecast.forecastday[0].day.maxtemp_c + "°C";
  todayMinTemp.textContent =
    "mín: " + responseJson.forecast.forecastday[0].day.mintemp_c + "°C";

  condition.textContent = "Agora: " + responseJson.current.condition.text;
  conditionDay.textContent =
    "Hoje: " + responseJson.forecast.forecastday[0].day.condition.text;
  chanceOfRain.textContent =
    "Probabilidade de chuva: " +
    responseJson.forecast.forecastday[0].day.daily_chance_of_rain +
    "%";
  precipitation.textContent =
    "Precipitação: " +
    responseJson.forecast.forecastday[0].day.totalprecip_mm +
    " mm";

  for (var i = 0; i <= 23; i++) {
    const hourElement = document.querySelector(`[data-hour="${i}"`);
    hourElement.querySelector(".time").textContent = i + "h";
    hourElement.querySelector("img").src =
      responseJson.forecast.forecastday[0].hour[i].condition.icon;
    hourElement.querySelector(".temp").textContent =
      responseJson.forecast.forecastday[0].hour[i].temp_c + "°C";
  }

  const currentLocalTime = new Date();
  const currentHour = currentLocalTime.getHours();
  scrollToHour(currentHour);

  tomorrowTitle.textContent =
    "Amanhã - " +
    currentLocalTime.getDate() +
    "/" +
    currentLocalTime.getMonth();

  tomorrowIcon.src = responseJson.forecast.forecastday[1].day.condition.icon;
  tomorrowCondition.textContent =
    responseJson.forecast.forecastday[1].day.condition.text;
  tomorrowMax.textContent =
    "máx: " + responseJson.forecast.forecastday[1].day.maxtemp_c + "°C";
  tomorrowMin.textContent =
    "min: " + responseJson.forecast.forecastday[1].day.mintemp_c + "°C";

  tomorrowRainChance.textContent =
    "Probabilidade de chuva: " +
    responseJson.forecast.forecastday[1].day.daily_chance_of_rain +
    "%";
  tomorrowRain.textContent =
    "Precipitação: " +
    responseJson.forecast.forecastday[1].day.totalprecip_mm +
    " mm";
}

function scrollToHour(hour) {
  const slider = document.querySelector(".slider");
  const element = document.querySelector(`[data-hour="${hour}"]`);

  const sliderPositionX = slider.getBoundingClientRect().left;
  const elementPositionX = element.getBoundingClientRect().left;
  console.log(hour);

  slider.scroll({
    left: elementPositionX - sliderPositionX,
    top: 0,
  });
}

// scrollToHour(4);

const startingCity = await getForecast("Curitiba");
printForecast(startingCity);

search.addEventListener("click", async function () {
  const data = await getForecast(locationInput.value);
  printForecast(data);
  locationInput.value = "";
});

locationInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    search.click();
    event.preventDefault();
  }
});
