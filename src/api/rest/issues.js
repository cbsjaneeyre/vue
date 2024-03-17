import { makeRequest } from '../requests'

export const getIssues = ({ owner, repo }) => makeRequest({
  url: `/repos/${owner}/${repo}/issues`,
  method: 'GET'
})
