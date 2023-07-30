import { ButtonContent } from '@components/ButtonContent/button-content'
import { faker } from '@faker-js/faker'
import { render } from '@tests/test-utils/sut'

describe('ButtonContent', () => {
  it('should render correctly without icon', async () => {
    const text = faker.word.words()
    const icon = false

    const { queryByTestId } = render(<ButtonContent text={text} icon={icon} />)

    expect(queryByTestId('icon')).toBeFalsy()
  })

  it('should render correctly with icon', async () => {
    const text = faker.word.words()
    const icon = true

    const { queryByTestId } = render(<ButtonContent text={text} icon={icon} />)

    expect(queryByTestId('icon')).toBeInTheDocument()
  })
})
