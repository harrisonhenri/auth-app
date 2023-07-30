import { Auth } from '@app/auth/auth'
import { handlers } from '@tests/mocks/auth/handler'
import { userData } from '@tests/mocks/data/user/user'
import { fireEvent, render, waitFor } from '@tests/test-utils/sut'
import { setupServer } from 'msw/node'

const server = setupServer(handlers[0])

describe('Auth', () => {
  beforeAll(() => {
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('should show an error when there is an error', async () => {
    const { getByTestId } = render(<Auth />)

    const emailInput = getByTestId('username')
    const passwordInput = getByTestId('password')
    const loginBtn = getByTestId('login-button')

    fireEvent.change(emailInput, {
      target: { value: userData.username },
    })
    fireEvent.change(passwordInput, {
      target: { value: userData.password },
    })
    fireEvent.click(loginBtn)

    await waitFor(() =>
      expect(getByTestId('error-snackbar')).toBeInTheDocument(),
    )
  })

  it('should show the spinner when the data is being loaded', async () => {
    const { getByTestId } = render(<Auth />)

    const emailInput = getByTestId('username')
    const passwordInput = getByTestId('password')
    const loginBtn = getByTestId('login-button')

    fireEvent.change(emailInput, {
      target: { value: userData.username },
    })
    fireEvent.change(passwordInput, {
      target: { value: userData.password },
    })
    fireEvent.click(loginBtn)

    await waitFor(() => expect(getByTestId('spinner')).toBeInTheDocument())
  })

  it('should not show an error when there is no error', async () => {
    server.resetHandlers()
    server.use(handlers[1])

    const { getByTestId, queryByTestId } = render(<Auth />)

    const emailInput = getByTestId('username')
    const passwordInput = getByTestId('password')
    const loginBtn = getByTestId('login-button')

    fireEvent.change(emailInput, {
      target: { value: userData.username },
    })
    fireEvent.change(passwordInput, {
      target: { value: userData.password },
    })
    fireEvent.click(loginBtn)

    await waitFor(() => expect(queryByTestId('error-snackbar')).toBeFalsy())
  })
})
