import "./reset.css";
import "./styles.css";
import { getWeather } from "./api";
import { setState } from "./state";
import { extractState } from "./logic";
import { renderWeather, showError } from "./dom";

/* Load the weather card for New York as a default when the app starts */
getWeather().then((data) => {
  setState(extractState(data));
  renderWeather();
});

/* Logic for searching a Location and updating state */
const input = document.querySelector("input");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
  let myLocation = input.value;
  getWeather(myLocation)
    .then((data) => {
      setState(extractState(data));
      renderWeather();
    })
    .catch((err) => {
      console.log("ERRRR");
      showError(err.message);
    });
  input.value = "";
});
