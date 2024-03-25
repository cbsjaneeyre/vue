import { feeds } from '@/pages/feeds'
import { storiesPage } from '@/pages/storiesPage'
import { auth } from '@/pages/auth'
import { repositories } from '@/pages/repositories'
import { following } from '@/pages/following'

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
  path: '/repositories',
  component: repositories,
  name: 'repositories'
},
{
  path: '/following',
  component: following,
  name: 'following'
}
]
