import axios from 'axios'

export const API_URL = 'https://content.guardianapis.com/search'
const API_KEY = '38dac9cb-d687-4d88-909c-942ce5868e83';

class Api {
  /**
   * Get the list of all articles
   */
  getAll() {
    return axios.get(API_URL + '?api-key=' + API_KEY + '&show-fields=trailText,thumbnail')
      .then(res => res.data.response && res.data.response.results)
  }
}

export default new Api();