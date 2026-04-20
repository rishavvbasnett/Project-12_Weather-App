/* FUNCTION 1:
 To process the raw object into state with only required field */
function extractState(rawJson) {
  let address = rawJson.address;
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
  if (unit === "us") {
    unit = "metric";
  } else if (unit === "metric") {
    unit = "us";
  }
}
export { extractState, toggleUnit, getUnit };
