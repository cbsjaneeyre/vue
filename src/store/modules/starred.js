import * as api from '../../api'

export const starred = {
  namespaced: true,
  state: {
    starredRepos: null
  },
  mutations: {
    setStarredRepo (state, payload) {
      state.starredRepos = payload
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
    }
  }
}
