import "./reset.css";
import "./styles.css";
import { fetchResponse } from "./api";
import { getState, setState } from "./state";
import { extractState } from "./logic";
import { renderWeather } from "./dom";

/* Load the weather card for New York as a default when the app starts */
fetchResponse()
  .then((data) => {
    setState(extractState(data));
    renderWeather();
  })
  .catch((err) => {
    console.error(err);
  });

/* Logic for searching a Location and updating state */
const input = document.querySelector("input");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
  let myLocation = input.value;
  fetchResponse(myLocation).then((data) => {
    setState(extractState(data));
  });
});
