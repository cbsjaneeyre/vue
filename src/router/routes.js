import { feeds } from '@/pages/feeds'
import { storiesPage } from '@/pages/storiesPage'
import { auth } from '@/pages/auth'
import { profile } from '@/pages/profile'

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
},
{
  path: '/profile',
  component: profile,
  name: 'profile'
}
]
