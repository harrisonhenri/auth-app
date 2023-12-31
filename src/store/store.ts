import { COMMON } from '@config/common'
import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import { baseApi } from '@services/http/axios'
import { authApi } from '@slices/auth/auth.api'
import { authSlice } from '@slices/auth/auth.slice'
import { contactsListSlice } from '@slices/contacts-list/contacts-list.slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type IAppDispatch = typeof store.dispatch

export const reducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  authSlice: authSlice.reducer,
  contactsListSlice: contactsListSlice.reducer,
})

const { ENV } = COMMON

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [authSlice.name, contactsListSlice.name],
}

const rootReducer: Reducer = (state, action) => {
  if (action.type === 'accountsSlice/signOut') {
    state = undefined
  }
  return reducers(state, action)
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: ENV === 'PRODUCTION' ? false : true,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(baseApi.middleware)
      .concat(authApi.middleware)
  },
})

export type RootState = ReturnType<typeof reducers>

export const persistor = persistStore(store)

export const useAppDispatch = () => useDispatch<IAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
