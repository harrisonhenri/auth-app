import { RouteProps as ReactDOMRouteProps, Navigate } from 'react-router-dom'

type RouteProps = ReactDOMRouteProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
  isLogged: boolean
}

export const PrivateRoute = ({
  component: Component,
  isLogged,
  ...rest
}: RouteProps) => {
  return isLogged ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to={{
        pathname: '/',
      }}
    />
  )
}
