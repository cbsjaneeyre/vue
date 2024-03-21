import * as api from '../../api'

export const auth = {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setData (state, payload) {
      state.user = payload
    }
  },
  actions: {
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    },
    async getUserInfo ({ commit }) {
      const { data } = await api.user.getUser()
      commit('setData', data)
      return data
    }
  }
}
