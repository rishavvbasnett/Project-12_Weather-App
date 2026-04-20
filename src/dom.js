import { getState, setState } from "./state";
import { fetchResponse } from "./api";
import { getUnit } from "./logic";

function renderWeather() {
  const weather = getState();

  /* div content */
  const content = document.querySelector(".content");
  content.replaceChildren(
    content.querySelector(".error"),
    content.querySelector(".toggleUnitBtn"),
  );

  /* The main weather card */
  const weatherCard = makeDiv("weather");
  content.append(weatherCard);

  /* First box of the weather card */
  const header = makeDiv("weather__header");
  /* Second box of the weather card */
  const main = makeDiv("weather__main");
  /* Last box of the weather card */
  const info = makeDiv("weather__info");

  /* Add elements to the Header box */
  const address = makeDiv("weather__address");
  address.append(weather.address);
  const date = makeDiv("weather__date");
  const dateString = new Date(weather.datetime);
  const myDate = dateString.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  date.append(myDate);
  header.append(address, date);

  /* Add elements to the Main Box */
  const mainMeta = makeDiv("weather__mainMeta");
  const mainDescription = makeDiv("weather__description");
  mainDescription.textContent = weather.description;

  /* Add elements to the top part of the main box */
  const mainImgDiv = makeDiv("weather__mainImgDiv");
  /* Img div and img element */
  const mainImg = document.createElement("img");
  mainImg.classList.add("weather__mainImg");
  const mainImgName = weather.icon;
  mainImg.src = "#";
  mainImgDiv.append(mainImg);

  /* text block with meta info */
  const textBlock = makeDiv("weather__mainMetaTextBlock");
  /* add p elements for the text block */
  const conditions = makeP("weather__conditions");
  conditions.textContent = weather.conditions;
  const temp = makeP("weather__temp");
  temp.textContent = weather.temp;
  const feelsLike = makeP("weather__feelsLike");
  feelsLike.textContent = "Feels like " + weather.feelslike;
  textBlock.append(conditions, temp, feelsLike);
  mainMeta.append(mainImgDiv, textBlock);

  /* Last box with other info/ info section */
  const humidityTitle = makeP("weather__humidityTitle");
  const humidity = makeP("weather__humidity");
  humidityTitle.textContent = "Humidity";
  humidity.textContent = weather.humidity;

  const tempTitle = makeP("weather__tempTitle");
  const temperature = makeP("weather__temperature");
  tempTitle.textContent = "Teperature";
  temperature.textContent = weather.temp;

  const uvTitle = makeP("weather__uvTitle");
  const uv = makeP("weather__uv");
  uvTitle.textContent = "UV Index";
  uv.textContent = weather.uvindex;

  const windSpeedTitle = makeP("weather__windSpeedTitle");
  const windSpeed = makeP("weather__windSpeed");
  windSpeedTitle.textContent = "Wind Speed";
  windSpeed.textContent = weather.windspeed;

  const infoTop = makeDiv("weather__infoTop");
  infoTop.append(humidityTitle, humidity, tempTitle, temperature);

  const infoBottom = makeDiv("weather__infoBottom");
  infoBottom.append(uvTitle, uv, windSpeedTitle, windSpeed);

  /* Logc for unit conversion: Check the unit before adding everything to the DOM */
  if (getUnit() === "us") {
    temp.append("°F");
    temperature.append("°F");
    feelsLike.append("°F");
    windSpeed.append(" mph");
  } else if (getUnit() === "metric") {
    temp.append("°C");
    temperature.append("°C");
    feelsLike.append("°C");
    windSpeed.append(" km/h");
  }

  /* Add items to the main box */
  main.append(mainMeta, mainDescription);
  /* Add items to the info box */
  info.append(infoTop, infoBottom);
  /* Add 3 main boxes in the weather card */
  weatherCard.append(header, main, info);
}

function makeDiv(classname) {
  const div = document.createElement("div");
  div.classList.add(classname);
  return div;
}

function makeP(classname) {
  const para = document.createElement("p");
  para.classList.add(classname);
  return para;
}

function showError(errorMessage) {
  const error = document.querySelector(".error");
  error.textContent = errorMessage;
  error.classList.remove("hidden");
  setTimeout(() => {
    error.classList.add("hidden");
    error.textContent = "";
  }, 4000);
}

export { renderWeather, showError };
