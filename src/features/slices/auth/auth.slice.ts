import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '@store/store'
import { IAuth } from './auth.model'
import { authApi } from './auth.api'

const initialState = {} as IAuth.State

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    signOut() {
      return initialState
    },
    updateSession(state, { payload }: PayloadAction<{ token: string }>) {
      state.token = payload.token
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (_, { payload }) => {
        return payload
      },
    )
  },
})

export const { signOut, updateSession } = authSlice.actions

export const userSelector = (state: RootState) => state.authSlice.user
