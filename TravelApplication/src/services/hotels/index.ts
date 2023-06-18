import axios from 'axios'
import { HotelListAPIResponse } from "./response";


export default class HotelListAPI {

  // @ts-ignore
  static async fetch(): Promise<HotelListAPIResponse> {
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
      params: {
        location_id: '298656',
        adults: '2',
        rooms: '1',
        nights: '1',
        offset: '0',
        currency: 'USD',
        order: 'asc',
        limit: '30',
        sort: 'recommended',
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
