// import * as api from '../../api'

export const auth = {
  namespaced: true,
  state: {},
  actions: {
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
