import { Home } from '@app/home/home'
import { userData } from '@tests/mocks/data/user/user'
import { handlers } from '@tests/mocks/home/handler'
import { render, waitFor } from '@tests/test-utils/sut'
import { setupServer } from 'msw/node'

const server = setupServer(handlers[0])

describe('Home', () => {
  beforeAll(() => {
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('should show an error when there is an error', async () => {
    const { getByTestId } = render(<Home />, {
      preloadedState: {
        authSlice: {
          user: userData,
          token: '',
        },
      },
    })

    await waitFor(() =>
      expect(getByTestId('error-snackbar')).toBeInTheDocument(),
    )
  })

  it('should show the spinner when the data is being loaded', async () => {
    const { getByTestId } = render(<Home />, {
      preloadedState: {
        authSlice: {
          user: userData,
          token: '',
        },
      },
    })

    await waitFor(() => expect(getByTestId('spinner')).toBeInTheDocument())
  })

  it('should show the user data correctly', async () => {
    server.resetHandlers()
    server.use(handlers[1])

    const { getByText } = render(<Home />, {
      preloadedState: {
        authSlice: {
          user: userData,
          token: '',
        },
      },
    })

    await waitFor(() =>
      expect(getByText(userData.username)).toBeInTheDocument(),
    )
  })
})
