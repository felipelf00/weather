import "./style.css";

const globalContainer = document.createElement("div");
globalContainer.id = "global-container";
document.body.appendChild(globalContainer);

const searchBar = document.createElement("div");
searchBar.id = "search-bar";
const locationInput = document.createElement("input");
locationInput.type = "text";
locationInput.placeholder = "Digite a cidade";
const search = document.createElement("button");
search.textContent = "Buscar";

searchBar.appendChild(locationInput);
searchBar.appendChild(search);
globalContainer.appendChild(searchBar);

// const todayTitle = document.createElement("h3");
// todayTitle.classList.add("title");

const mainRow = document.createElement("div");
// mainRow.id = "main-row";
mainRow.classList.add("row", "today");

const cityName = document.createElement("h1");
cityName.id = "city-name";

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

mainRow.appendChild(cityName);
mainRow.appendChild(weatherIcon);
mainRow.appendChild(currentTemp);
mainRow.appendChild(maxMin);
globalContainer.appendChild(mainRow);

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const infoContainer = document.createElement("div");
infoContainer.classList.add("info-container");

const condition = document.createElement("div");
condition.classList.add("info");
infoContainer.appendChild(condition);

const conditionDay = document.createElement("div");
conditionDay.classList.add("info");
infoContainer.appendChild(conditionDay);

const chanceOfRain = document.createElement("div");
chanceOfRain.classList.add("info");
infoContainer.appendChild(chanceOfRain);

const precipitation = document.createElement("div");
precipitation.classList.add("info");
infoContainer.appendChild(precipitation);

wrapper.appendChild(infoContainer);

const sliderContainer = document.createElement("div");
sliderContainer.classList.add("slider-container");
const sliderToday = document.createElement("div");
sliderToday.classList.add("slider", "snap", "expanded");

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
  sliderToday.appendChild(hourElement);
}

sliderContainer.appendChild(sliderToday);

const expanderTodayContainer = document.createElement("div");
expanderTodayContainer.classList.add("exp-container");
const expanderToday = document.createElement("span");
expanderToday.classList.add("material-symbols-outlined");
expanderToday.classList.add("expander", "clicked");
expanderToday.textContent = "expand_more";
expanderTodayContainer.appendChild(expanderToday);

sliderContainer.appendChild(expanderTodayContainer);
wrapper.appendChild(sliderContainer);
globalContainer.appendChild(wrapper);

expanderToday.addEventListener("click", () => {
  sliderToday.classList.toggle("expanded");
  expanderToday.classList.toggle("clicked");
});

const wrapper2 = document.createElement("div");
wrapper2.classList.add("wrapper");

const tomorrowContainer = document.createElement("div");
tomorrowContainer.classList.add("tomorrow-container");

const tomorrowTitle = document.createElement("h3");
tomorrowTitle.classList.add("title");
tomorrowContainer.appendChild(tomorrowTitle);

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
tomorrowContainer.appendChild(tomorrowRow);

const tomorrowRainChance = document.createElement("div");
tomorrowRainChance.classList.add("info");
const tomorrowRain = document.createElement("div");
tomorrowRain.classList.add("info");
tomorrowContainer.appendChild(tomorrowRainChance);
tomorrowContainer.appendChild(tomorrowRain);

const sliderContainerTomorrow = document.createElement("div");
sliderContainerTomorrow.classList.add("slider-container");

const sliderTomorrow = document.createElement("div");
sliderTomorrow.classList.add("slider");
sliderTomorrow.classList.add("snap");

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
  sliderTomorrow.appendChild(hourElement);
}

sliderContainerTomorrow.appendChild(sliderTomorrow);

const expanderTomorrowContainer = document.createElement("div");
expanderTomorrowContainer.classList.add("exp-container");
const expanderTomorrow = document.createElement("span");
expanderTomorrow.classList.add("material-symbols-outlined");
expanderTomorrow.classList.add("expander");
expanderTomorrow.textContent = "expand_more";
expanderTomorrowContainer.appendChild(expanderTomorrow);

sliderContainerTomorrow.appendChild(expanderTomorrowContainer);
tomorrowContainer.appendChild(sliderContainerTomorrow);

expanderTomorrow.addEventListener("click", () => {
  sliderTomorrow.classList.toggle("expanded");
  expanderTomorrow.classList.toggle("clicked");
});

// after
const afterContainer = document.createElement("div");
afterContainer.classList.add("after-container");

const afterTitle = document.createElement("h3");
afterTitle.classList.add("title");
afterContainer.appendChild(afterTitle);

const afterRow = document.createElement("div");
afterRow.classList.add("row");
const afterIcon = document.createElement("img");
const afterCondition = document.createElement("div");
const afterMaxMin = document.createElement("div");
afterMaxMin.classList.add("max-min");
const afterMax = document.createElement("div");
const afterMin = document.createElement("div");
afterMaxMin.appendChild(afterMax);
afterMaxMin.appendChild(afterMin);

afterRow.appendChild(afterIcon);
afterRow.appendChild(afterCondition);
afterRow.appendChild(afterMaxMin);
afterContainer.appendChild(afterRow);

const afterRainChance = document.createElement("div");
afterRainChance.classList.add("info");
const afterRain = document.createElement("div");
afterRain.classList.add("info");
afterContainer.appendChild(afterRainChance);
afterContainer.appendChild(afterRain);

const sliderContainerAfter = document.createElement("div");
sliderContainerAfter.classList.add("slider-container");

const sliderAfter = document.createElement("div");
sliderAfter.classList.add("slider");
sliderAfter.classList.add("snap");

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
  sliderAfter.appendChild(hourElement);
}

sliderContainerAfter.appendChild(sliderAfter);

const expanderAfterContainer = document.createElement("div");
expanderAfterContainer.classList.add("exp-container");
const expanderAfter = document.createElement("span");
expanderAfter.classList.add("material-symbols-outlined");
expanderAfter.classList.add("expander");
expanderAfter.textContent = "expand_more";
expanderAfterContainer.appendChild(expanderAfter);

sliderContainerAfter.appendChild(expanderAfterContainer);
afterContainer.appendChild(sliderContainerAfter);

expanderAfter.addEventListener("click", () => {
  sliderAfter.classList.toggle("expanded");
  expanderAfter.classList.toggle("clicked");
});

wrapper2.appendChild(tomorrowContainer);
wrapper2.appendChild(afterContainer);
globalContainer.appendChild(wrapper2);

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
  const currentLocalTime = new Date();
  const currentHour = currentLocalTime.getHours();

  cityName.textContent = responseJson.location.name;
  // todayTitle.textContent =
  //   "Hoje - " + currentLocalTime.getDate() + "/" + currentLocalTime.getMonth();
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
    const hourElement = sliderToday.querySelector(`[data-hour="${i}"`);
    hourElement.querySelector(".time").textContent = i + "h";
    hourElement.querySelector("img").src =
      responseJson.forecast.forecastday[0].hour[i].condition.icon;
    hourElement.querySelector(".temp").textContent =
      responseJson.forecast.forecastday[0].hour[i].temp_c + "°C";
  }

  const tomorrow = new Date(currentLocalTime);
  tomorrow.setDate(currentLocalTime.getDate() + 1);

  tomorrowTitle.textContent =
    "Amanhã - " + tomorrow.getDate() + "/" + tomorrow.getMonth();

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

  for (var i = 0; i <= 23; i++) {
    const hourElement = sliderTomorrow.querySelector(`[data-hour="${i}"`);
    hourElement.querySelector(".time").textContent = i + "h";
    hourElement.querySelector("img").src =
      responseJson.forecast.forecastday[1].hour[i].condition.icon;
    hourElement.querySelector(".temp").textContent =
      responseJson.forecast.forecastday[1].hour[i].temp_c + "°C";
  }

  const after = new Date(currentLocalTime);
  after.setDate(currentLocalTime.getDate() + 2);

  afterTitle.textContent =
    "Depois de amanhã - " + after.getDate() + "/" + after.getMonth();

  afterIcon.src = responseJson.forecast.forecastday[2].day.condition.icon;
  afterCondition.textContent =
    responseJson.forecast.forecastday[2].day.condition.text;
  afterMax.textContent =
    "máx: " + responseJson.forecast.forecastday[2].day.maxtemp_c + "°C";
  afterMin.textContent =
    "min: " + responseJson.forecast.forecastday[2].day.mintemp_c + "°C";

  afterRainChance.textContent =
    "Probabilidade de chuva: " +
    responseJson.forecast.forecastday[2].day.daily_chance_of_rain +
    "%";
  afterRain.textContent =
    "Precipitação: " +
    responseJson.forecast.forecastday[2].day.totalprecip_mm +
    " mm";

  for (var i = 0; i <= 23; i++) {
    const hourElement = sliderAfter.querySelector(`[data-hour="${i}"`);
    hourElement.querySelector(".time").textContent = i + "h";
    hourElement.querySelector("img").src =
      responseJson.forecast.forecastday[2].hour[i].condition.icon;
    hourElement.querySelector(".temp").textContent =
      responseJson.forecast.forecastday[2].hour[i].temp_c + "°C";
  }

  scrollToHour(currentHour, sliderToday);
  scrollToHour(6, sliderTomorrow);
  scrollToHour(6, sliderAfter);
}

function scrollToHour(hour, slider) {
  slider.scroll({
    left: 0,
    top: 0,
  });

  const element = slider.querySelector(`[data-hour="${hour}"]`);

  const sliderPositionX = slider.getBoundingClientRect().left;
  const elementPositionX = element.getBoundingClientRect().left;

  console.log(
    `Scrolling ${slider.classList} to hour ${hour} at position ${elementPositionX}`
  );

  slider.scroll({
    left: elementPositionX - sliderPositionX,
    top: 0,
    behavior: "smooth", // Adding smooth scrolling behavior
  });
}

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
