import { Auth } from '@app/auth/auth'
import { ContactsList } from '@app/contacts-list/contacts-list'
import { Home } from '@app/home/home'
import { NotFound } from '@app/not-found/not-found'
import { FaThLarge, FaPhone } from 'react-icons/fa'

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
    path: '/contatos',
    isPrivate: true,
    Component: ContactsList,
    Icon: FaPhone,
    title: 'Contatos',
  },
  {
    path: '/404',
    isPrivate: false,
    Component: NotFound,
    Icon: null,
  },
]
