import { SnackBar } from '@components/Snackbar/snack-bar'
import { faker } from '@faker-js/faker'
import { render } from '@tests/test-utils/sut'

describe('SnackBar', () => {
  it('should render correctly when its a success snack', async () => {
    const text = faker.word.words()
    const type = 'success'

    const { getByTestId } = render(<SnackBar type={type} text={text} />)

    expect(getByTestId('success-icon')).toBeInTheDocument()
    expect(
      getByTestId('success-snackbar').className.includes('success'),
    ).toBeTruthy()
  })

  it('should render correctly when its a error snack', async () => {
    const text = faker.word.words()
    const type = 'error'

    const { getByTestId } = render(<SnackBar type={type} text={text} />)

    expect(getByTestId('error-icon')).toBeInTheDocument()
    expect(
      getByTestId('error-snackbar').className.includes('error'),
    ).toBeTruthy()
  })

  it('should render correctly when the snack is open', async () => {
    const text = faker.word.words()
    const type = 'error'

    const { getByTestId } = render(<SnackBar type={type} text={text} open />)

    expect(
      getByTestId('error-snackbar').className.includes('open'),
    ).toBeTruthy()
  })
})
