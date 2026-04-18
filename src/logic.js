/* function 1 to process the raw object into state with only required field */
function extractState(rawJson) {
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
  return {
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
}

export { extractState };
