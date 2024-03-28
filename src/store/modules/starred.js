import * as api from '../../api'

export const starred = {
  namespaced: true,
  state: {
    starredRepos: null
  },
  mutations: {
    setStarredRepo (state, payload) {
      state.starredRepos = payload
    },
    setIssuesRepo (state, payload) {
      state.starredRepos = state.starredRepos.map((item) => {
        if (item.id === payload.id) {
          item.issues = { list: payload.issues, state: payload.state }
        }
        return item
      })
    }
  },
  actions: {
    async getStarredRepo ({ commit }) {
      try {
        const { data } = await api.starred.getStarredRepos(10)
        commit('setStarredRepo', data)
      } catch (e) {
        console.log(e)
      }
    },
    async getRepoIssues ({ commit }, { id, owner, repo }) {
      try {
        const { data } = await api.issues.getIssues({ owner, repo })
        if (data.length !== 0) {
          commit('setIssuesRepo', { id, issues: data, state: false })
        }
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}
