import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.scss'
import { Routes } from '@routes/routes'
import { persistor, store } from '@store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
