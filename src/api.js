const apiKey = "KK4V3MCSUD6VQV7VRW69UJABW";
const baseUrl =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

async function fetchResponse(location = "New York") {
  try {
    const fetchUrl = `${baseUrl}${location}/?key=${apiKey}`;
    const response = await fetch(fetchUrl);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export { fetchResponse };
