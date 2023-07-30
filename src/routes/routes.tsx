import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from 'react-router-dom'

import { PrivateRoute } from './private-route'
import { pages } from './routes.model'
import { useAppSelector } from '@store/store'
import { userSelector } from '@slices/auth/auth.slice'

export const Routes = () => {
  const user = useAppSelector(userSelector)

  return (
    <BrowserRouter>
      <Switch>
        {user && <Route path="/" element={<Navigate to="/home" />} />}
        {pages.map(({ isPrivate, path, Component }, idx) =>
          !isPrivate ? (
            <Route key={idx} path={path} element={<Component />} />
          ) : (
            <Route
              key={idx}
              path={path}
              element={
                <PrivateRoute isLogged={Boolean(user)} component={Component} />
              }
            />
          ),
        )}
      </Switch>
    </BrowserRouter>
  )
}
