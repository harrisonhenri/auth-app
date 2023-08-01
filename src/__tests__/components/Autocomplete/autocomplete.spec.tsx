import { Autocomplete } from '@components/Autocomplete/autocomplete'
import { contactData } from '@tests/mocks/data/contact/contact'
import { fireEvent, render } from '@tests/test-utils/sut'
import { vitest } from 'vitest'

describe('Autocomplete', () => {
  function buildParameters() {
    const data1 = {
      loading: true,
      inputValue: '',
      isSuggestionsEmpty: false,
      suggestions: [],
    }
    const data2 = {
      loading: false,
      inputValue: 'a',
      isSuggestionsEmpty: false,
      suggestions: [],
    }
    const data3 = {
      loading: false,
      inputValue: '',
      isSuggestionsEmpty: true,
      suggestions: [],
    }
    const data4 = {
      loading: false,
      inputValue: '',
      isSuggestionsEmpty: false,
      suggestions: [contactData],
    }

    const expected1 = 'spinner'
    const expected2 = 'clear-input'
    const expected3 = 'empty-suggestions'
    const expected4 = 'suggestions'

    return [
      { data: data1, expected: expected1 },
      { data: data2, expected: expected2 },
      { data: data3, expected: expected3 },
      { data: data4, expected: expected4 },
    ]
  }

  it('should render correctly', async () => {
    const handleClickItem = vitest.fn()
    const clearInput = vitest.fn()
    const handleInputChange = vitest.fn()
    const ItemComponent = () => <></>

    buildParameters().map(({ data, expected }) => {
      const { getByTestId } = render(
        <Autocomplete
          {...data}
          ItemComponent={ItemComponent}
          clearInput={clearInput}
          handleInputChange={handleInputChange}
          handleClickItem={handleClickItem}
        />,
      )

      expect(getByTestId(expected)).toBeInTheDocument()
    })
  })

  it('should call clearInput on click ', async () => {
    const handleClickItem = vitest.fn()
    const clearInput = vitest.fn()
    const handleInputChange = vitest.fn()
    const ItemComponent = () => <></>

    const { data } = buildParameters()[1]

    const { getByTestId } = render(
      <Autocomplete
        {...data}
        ItemComponent={ItemComponent}
        clearInput={clearInput}
        handleInputChange={handleInputChange}
        handleClickItem={handleClickItem}
      />,
    )

    const button = getByTestId('clear-input')
    fireEvent.click(button)

    expect(clearInput).toHaveBeenCalledTimes(1)
  })
})
