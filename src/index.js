import "./style.css";

const hello = document.createElement("h1");
hello.textContent = "hello";
document.body.appendChild(hello);

const locationInput = document.createElement("input");
locationInput.type = "text";
const search = document.createElement("button");
search.textContent = "Buscar";
const weatherIcon = document.createElement("img");

document.body.appendChild(locationInput);
document.body.appendChild(search);
document.body.appendChild(weatherIcon);

async function getForecast(location) {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=2c503903ede24409ab9195110230808&q=" +
      location,
    { mode: "cors" }
  );
  console.log(response);
  const responseJson = await response.json();
  console.log(responseJson);
  weatherIcon.src = responseJson.current.condition.icon;
}

search.addEventListener("click", () => {
  getForecast(locationInput.value);
});
