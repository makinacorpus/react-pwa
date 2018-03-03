import axios from 'axios'

export const API_URL = 'https://newsapi.org/v2'

const OPTIONS = {
  headers: {
    'Authorization': 'Bearer 368a639b02654d1d97b1c10f0bde9662'
  }
}

class Api {
  /**
   * Get the list of all articles from france
   */
  getAll() {
    return axios.get(API_URL + '/top-headlines?country=fr', OPTIONS)
      .then(res => res.data.articles)
  }
}

export default new Api();