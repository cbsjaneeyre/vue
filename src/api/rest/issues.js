import { makeRequest } from '../requests'

export const getIssues = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github+json'
  return makeRequest({
    url: `/repos/${owner}/${repo}/issues`,
    method: 'GET',
    headers: {
      accept: contentHeader
    }
  })
}
