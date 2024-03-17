import { makeRequest } from '../requests'

export const getUser = () => makeRequest({
  url: '/user',
  method: 'GET'
})
