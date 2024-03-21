import { createStore } from 'vuex'
import { trendings } from './modules/trendings'
import { auth } from './modules/auth'
import { starred } from './modules/starred'
import { issues } from './modules/issues'

export default createStore({
  getters: {
    getUnstarredRepos (state) {
      return state.trendings.data.filter((trendingsRepo) => !state.starred.data.some((starredRepo) => trendingsRepo.id === starredRepo.id))
    }
  },
  modules: {
    trendings,
    auth,
    starred,
    issues
  }
})
