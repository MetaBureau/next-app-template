import axios from "axios";

export default async function getPlaces(query) {
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
      {
        params: {
          access_token: 'pk.eyJ1IjoibWV0YWJ1cmVhdSIsImEiOiJjbHY3ZzdjbWwwOWVtMmtueDFrdTJkc2RyIn0.cxMBN9cYT8gWMD8H37adTA',
          country: 'AU',
          types: 'address'
        },

      }
    );

    return response.data.features;
  } catch (error) {
    console.error("There was an error while fetching places:", error);
  }
}