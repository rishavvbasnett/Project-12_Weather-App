async function getWeather(location = "New York") {
  const apiKey = "Y9WB9BACAZDAR3R93WGUJ23ZP";
  const baseUrl =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const fullUrl = `${baseUrl}${location}/?key=${apiKey}`;

  return fetchResponse(fullUrl);
}

async function fetchResponse(url) {
  const response = await fetch(url);

  if (!response.ok) {
    console.log(response);
    let text = await response.text();
    if (text.includes(":")) {
      text = text.split(":")[1].trim();
    }
    const err = new Error(`${text || "Request Failed"}`);
    err.status = response.status;
    throw err;
  }
  const data = await response.json();
  return data;
}
export { fetchResponse, getWeather };
