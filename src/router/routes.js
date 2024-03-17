import { feeds } from '@/pages/feeds'
import { storiesPage } from '@/pages/storiesPage'
import { auth } from '@/pages/auth'

export default [{
  path: '/',
  component: feeds,
  name: 'feeds'
},
{
  path: '/storiesPage/:initialSlide',
  component: storiesPage,
  name: 'storiesPage'
},
{
  path: '/auth',
  component: auth,
  name: 'auth'
}
]
