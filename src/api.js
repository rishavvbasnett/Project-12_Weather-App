const apiKey = "KK4V3MCSUD6VQV7VRW69UJABW";
const baseUrl =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

async function fetchResponse({ url = baseUrl, location = "New York" }) {
  try {
    const fetchUrl = `${url}${location}/?key=${apiKey}`;
    const response = await fetch(
      `${url}${location}/?key=${apiKey}&include=current`,
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export { fetchResponse };
