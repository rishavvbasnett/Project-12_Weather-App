/* FUNCTION 1:
 To process the raw object into state with only required field */
function extractState(rawJson) {
  console.log(rawJson);
  let address = rawJson.resolvedAddress;
  console.log(address);
  const current = rawJson.days[0];
  const {
    datetime,
    conditions,
    description,
    feelslike,
    temp,
    windspeed,
    humidity,
    icon,
    uvindex,
  } = current;
  let obj = {
    datetime,
    conditions,
    description,
    feelslike,
    temp,
    windspeed,
    humidity,
    icon,
    uvindex,
  };
  return { address, ...obj };
}

let unit = "us";

function getUnit() {
  return unit;
}

function toggleUnit() {
  const toggleUnitButton = document.querySelector(".toggleUnitBtn");
  console.log(toggleUnitButton);
  if (unit === "us") {
    unit = "metric";
    toggleUnitButton.textContent = "UK";
  } else if (unit === "metric") {
    unit = "us";
    toggleUnitButton.textContent = "US";
  }
}

export { extractState, toggleUnit, getUnit };
