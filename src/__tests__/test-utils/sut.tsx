import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { persistConfig, reducers, RootState } from '@store/store'
import { RenderOptions, render } from '@testing-library/react'
import { ReactElement } from 'react'
import { baseApi } from '@services/http/axios'
import { authApi } from '@slices/auth/auth.api'

type CustomRenderOptions = {
  preloadedState?: PreloadedState<RootState>
} & Omit<RenderOptions, 'wrapper'>

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  const { preloadedState } = options || {}

  const customStore = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    preloadedState,
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

  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={customStore}>{children}</Provider>
  }

  return { ...render(ui, { wrapper: Wrapper, ...options }), store: customStore }
}

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

// override render method
export { customRender as render }
