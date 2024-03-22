import * as api from '../../api'

export const issues = {
  namespaced: true,
  state: {
    repoIssues: []
  },
  mutations: {
    setRepoIssues (state, payload) {
      state.repoIssues = payload
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.repoIssues.find(issue => issue.id === id)
    }
  },
  actions: {
    async getRepoIssues ({ commit, getters }, { id }) {
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        const { data } = await api.issues.getIssues({ owner: owner.login, repo })
        commit('setRepoIssues', { id, data })
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}
