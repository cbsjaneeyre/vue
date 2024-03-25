import { makeRequest } from '@/api/requests'
import axios from 'axios'

jest.mock('axios')

const request = [{ name: 'test' }]

const mockFn = jest.fn(() => Promise.resolve({
  data: {
    request
  }
}))

axios.get.mockImplementation(mockFn)

describe('function makeRequest', () => {
  it('makes a request', async () => {
    await makeRequest()

    expect(mockFn.mock.calls.length).toBe(1)
  })
})
