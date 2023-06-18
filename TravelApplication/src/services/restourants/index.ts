import axios from 'axios'
import { RestourantAPIResponse } from "./response";

export default class RestourantAPI {

  // @ts-ignore
  static async fetch(): Promise<RestourantAPIResponse> {
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list',
      params: {
        location_id: '298656',
        restaurant_tagcategory: '10591',
        restaurant_tagcategory_standalone: '10591',
        currency: 'USD',
        lunit: 'km',
        limit: '30',
        open_now: 'false',
        lang: 'en_US'
      },
      headers: {
        'X-RapidAPI-Key': 'fc6c10a051mshb647d537540e222p19239bjsna7bd3befbf9a',
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
