import { Auth } from '@app/auth/auth'
import { Home } from '@app/home/home'

export const Pages = [
  {
    path: '/',
    isPrivate: false,
    Component: Auth,
  },
  {
    path: '/home',
    isPrivate: false,
    Component: Home,
  },
]
