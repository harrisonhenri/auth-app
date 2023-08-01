import { ContactSuggestionCard } from '@components/ContactSuggestionCard/contact-suggestions-card'
import { contactData } from '@tests/mocks/data/contact/contact'
import { fireEvent, render } from '@tests/test-utils/sut'
import { vitest } from 'vitest'

describe('ContactSuggestionCard', () => {
  it('should render correctly', async () => {
    const handleClickItem = vitest.fn()

    const { getByTestId } = render(
      <ContactSuggestionCard
        data={contactData}
        handleClickItem={handleClickItem}
      />,
    )

    expect(getByTestId('avatar')).toBeInTheDocument()
  })

  it('should call handleClickItem on click', async () => {
    const handleClickItem = vitest.fn()

    const { getByRole } = render(
      <ContactSuggestionCard
        data={contactData}
        handleClickItem={handleClickItem}
      />,
    )

    const button = getByRole('button')
    fireEvent.click(button)

    expect(handleClickItem).toHaveBeenCalledTimes(1)
  })
})
