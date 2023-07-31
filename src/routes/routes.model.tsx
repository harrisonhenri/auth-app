import { Auth } from '@app/auth/auth'
import { Home } from '@app/home/home'
import { NotFound } from '@app/not-found/not-found'
import { FaThLarge } from 'react-icons/fa'

export const pages = [
  {
    path: '/',
    isPrivate: false,
    Component: Auth,
    Icon: null,
  },
  {
    path: '/home',
    isPrivate: true,
    Component: Home,
    Icon: FaThLarge,
    title: 'Home',
  },
  {
    path: '/404',
    isPrivate: false,
    Component: NotFound,
    Icon: null,
  },
]
