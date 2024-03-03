import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequest = ({
  url, method = 'GET', data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL,
  headers
})
