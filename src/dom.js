import { getState, setState } from "./state";

function renderWeather() {
  const weather = getState();
  console.log(weather);

  /* div content */
  const content = document.querySelector(".content");

  /* The main weather card */
  const weatherCard = makeDiv("weather");
  content.append(weatherCard);

  /* First box of the weather card */
  const top = makeDiv("weather__top");
  /* Second box of the weather card */
  const middle = makeDiv("weather__middle");
  /* Last box of the weather card */
  const bottom = makeDiv("weather__bottom");

  /* Add 3 main boxes in the weather card */
  weatherCard.append(top, middle, bottom);
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

export { renderWeather };
