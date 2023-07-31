import { NotFound } from '@app/not-found/not-found'
import { render } from '@tests/test-utils/sut'

describe('NotFound', () => {
  it('should render the not found animation correctly', async () => {
    const { getByTestId } = render(<NotFound />)

    expect(getByTestId('not-found-animation')).toBeInTheDocument()
  })
})
