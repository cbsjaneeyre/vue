import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  try {
    const token = localStorage.getItem('token')

    if (to.name === 'auth') {
      next()
    }

    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`
      }
    })

    if (response.status === 401) {
      console.log('no token')
      next({ name: 'auth' })
    } else {
      next()
    }
  } catch (e) {
    next({ name: 'auth' })
    console.log(e)
  }
})

export default router
