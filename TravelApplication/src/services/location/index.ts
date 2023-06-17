import axios from 'axios'
import { LocationAPIResponse } from "./response";

export default class LocationAPI {

  // @ts-ignore
  static async fetch(): Promise<LocationAPIResponse> {
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/locations/search',
      params: {
        query: 'Ankara',
        limit: '30',
        offset: '0',
        units: 'km',
        location_id: '1',
        currency: 'USD',
        sort: 'relevance',
        lang: 'en_US'
      },
      headers: {
        'X-RapidAPI-Key': 'da0fce7008mshaafb82a9f1f3679p123467jsne61d2e83d9a5',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
