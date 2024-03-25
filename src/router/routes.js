import { feeds } from '@/pages/feeds'
import { storiesPage } from '@/pages/storiesPage'
import { auth } from '@/pages/auth'
import { following } from '@/pages/following'
import { repositories } from '@/pages/repositories'

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
  path: '/following',
  component: following,
  name: 'following'
},
{
  path: '/repositories',
  component: repositories,
  name: 'repositories'
}
]
