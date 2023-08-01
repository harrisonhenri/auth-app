import { ContactsList } from '@app/contacts-list/contacts-list'
import { handlers } from '@tests/mocks/contacts-list/handler'
import { userData } from '@tests/mocks/data/user/user'
import { fireEvent, render, waitFor } from '@tests/test-utils/sut'
import { setupServer } from 'msw/node'

const server = setupServer(handlers[0])

describe('ContactsList', () => {
  beforeAll(() => {
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('should show the spinner when the data is being loaded', async () => {
    const { getByTestId } = render(<ContactsList />)

    const searchUserInput = getByTestId('search-user-text')

    fireEvent.change(searchUserInput, {
      target: { value: userData.firstName },
    })

    await waitFor(() => expect(getByTestId('spinner')).toBeInTheDocument())
  })

  it('should not show the suggestion when the user does type the minimum number of characters', async () => {
    const { getByTestId, queryByTestId } = render(<ContactsList />)

    const searchUserInput = getByTestId('search-user-text')

    fireEvent.change(searchUserInput, {
      target: { value: userData.firstName.substring(0, 1) },
    })

    await waitFor(() =>
      expect(queryByTestId('contact-suggestion-card')).toBeFalsy(),
    )
  })

  it('should show the suggestion correctly', async () => {
    const { getByTestId } = render(<ContactsList />)

    const searchUserInput = getByTestId('search-user-text')

    fireEvent.change(searchUserInput, {
      target: { value: userData.firstName },
    })

    await waitFor(() =>
      expect(getByTestId('contact-suggestion-card')).toBeInTheDocument(),
    )
  })

  it('should add the contact successfully', async () => {
    const { getByTestId } = render(<ContactsList />)

    const searchUserInput = getByTestId('search-user-text')

    fireEvent.change(searchUserInput, {
      target: { value: userData.firstName },
    })

    await waitFor(() =>
      expect(getByTestId('contact-suggestion-card')).toBeInTheDocument(),
    )

    const cardSuggestion = getByTestId(`add-${userData.id}`)

    fireEvent.click(cardSuggestion)

    expect(getByTestId('contacts-list').childNodes.length).toBe(1)
  })
})
