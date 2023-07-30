import { Input } from '@components/Input/input'
import { faker } from '@faker-js/faker'
import { render } from '@tests/test-utils/sut'

describe('Input', () => {
  it('should show the error message correctly', async () => {
    const input1 = 'input1'
    const input2 = 'input2'
    const errorMessage = faker.word.words()

    const { queryByTestId } = render(<Input name={input1} />)
    const { getByTestId } = render(
      <Input name={input2} errorMessage={errorMessage} />,
    )

    expect(queryByTestId('input1-error')).toBeFalsy()
    expect(getByTestId('input2-error')).toBeInTheDocument()
  })

  it('should render the input with the correct attribute', async () => {
    const input1 = 'input1'
    const input2 = 'input2'
    const input3 = 'input3'
    const errorMessage = faker.word.words()

    const { getByTestId: getByTestId1 } = render(<Input name={input1} />)
    const { getByTestId: getByTestId2 } = render(
      <Input name={input2} errorMessage={errorMessage} touched />,
    )
    const { getByTestId: getByTestId3 } = render(
      <Input name={input3} touched errorMessage="" />,
    )

    expect(getByTestId1('input1-container')).toHaveAttribute(
      'data-status',
      'untouched',
    )
    expect(getByTestId2('input2-container')).toHaveAttribute(
      'data-status',
      'invalid',
    )
    expect(getByTestId3('input3-container')).not.toHaveAttribute('data-status')
  })
})
