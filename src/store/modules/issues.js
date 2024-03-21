import * as api from '../../api'

export const issues = {
  namespaced: true,
  state: {
    repoIssues: null
  },
  mutations: {
    setRepoIssues (state, payload) {
      state.repoIssues = payload
    }
  },
  actions: {
    async getRepoIssues ({ commit }) {
      const { data } = await api.issues.getIssues()
      commit('setRepoIssues', data)
      return data
    }
  }
}
