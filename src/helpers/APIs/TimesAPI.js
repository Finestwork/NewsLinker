import axios from 'axios'

export default class TimesAPI {
  static BASE_URL = 'https://www.nytimes.com'

  // Get the article
  static getArticles(params = {}) {
    const CONFIG = {
      params: {
        ...params,
        'api-key': 'wckQq4g8Af910HbxJ8AgwlAtcCnDIfP6'
      }
    }
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', CONFIG)
  }
}
