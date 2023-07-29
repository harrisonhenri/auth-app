import { Auth } from '@app/auth/auth'

export const Pages = [
  {
    path: '/',
    isPrivate: false,
    Component: Auth,
  },
  {
    path: '/',
    isPrivate: false,
    Component: () => <></>,
  },
]
