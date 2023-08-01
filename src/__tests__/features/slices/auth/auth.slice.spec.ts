import { faker } from '@faker-js/faker'
import { configureStore } from '@reduxjs/toolkit'

import { authSlice, signOut, updateSession } from '@slices/auth/auth.slice'
import { RootState } from '@store/store'
import { userData } from '@tests/mocks/data/user/user'

describe('authSlice', () => {
  let store = configureStore({ reducer: { authSlice: authSlice.reducer } })

  const mockState = {
    authSlice: { user: userData, token: faker.internet.ip() },
  } as RootState

  beforeEach(() => {
    store = configureStore({
      reducer: { authSlice: authSlice.reducer },
      preloadedState: mockState,
    })
  })

  it('should sign-out successfully', () => {
    store.dispatch(signOut())

    expect(Object.keys(store.getState().authSlice).length).toBe(0)
  })

  it('should update the token successfully', () => {
    const newToken = faker.internet.ip()

    store.dispatch(updateSession({ token: newToken }))
    expect(store.getState().authSlice.token).toBe(newToken)
  })
})
