import axios from 'axios'
import { WeatherAPIResponse } from "./response";

export default class WeatherAPI {

  // @ts-ignore
  static async fetch(): Promise<WeatherAPIResponse> {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: 'Ankara',
        days: '3'
      },
      headers: {
        'X-RapidAPI-Key': 'da0fce7008mshaafb82a9f1f3679p123467jsne61d2e83d9a5',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      //console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
