import "./reset.css";
import "./styles.css";
import { getWeather } from "./api";
import { setState } from "./state";
import { extractState, getUnit, toggleUnit } from "./logic";
import { renderWeather, showError } from "./dom";

/* Load the weather card for New York as a default when the app starts */
loadWeather("New York", "us");

/* Logic for searching a Location and updating state */
const input = document.querySelector("input");
const submitBtn = document.querySelector("button");
const toggleUnitBtn = document.querySelector(".toggleUnit");

submitBtn.addEventListener("click", (e) => {
  let myLocation = input.value;
  loadWeather(myLocation);
  input.value = "";
});

toggleUnitBtn.addEventListener("click", (e) => {
  loadWeather();
});

function loadWeather(location) {
  /* Check the unit */
  let myUnit = getUnit();
  /* call the getWeather function */
  getWeather(location, myUnit)
    .then((data) => {
      console.log(data);
      console.log(extractState(data));
      setState(extractState(data));
      renderWeather();
    })
    .catch((err) => {
      showError(err.message);
    });
}
