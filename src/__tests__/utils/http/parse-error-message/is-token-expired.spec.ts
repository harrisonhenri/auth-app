import { parseErrorMessage } from '@utils/http/parse-error-message/parse-error-message'

describe('parseErrorMessage', () => {
  function buildParameters() {
    const error1 = { name: 'Error name' }
    const error2 = {
      status: 400,
      data: {
        message: 'Network Error',
      },
    }
    const error3 = {
      status: 400,
      data: {
        message: 'Any message',
      },
    }

    const expected1 =
      'Estamos tendo problemas em fazer isso. Verifique sua conexão com a internet e tente novamente.'
    const expected2 =
      'Estamos tendo problemas em fazer isso. Verifique sua conexão com a internet e tente novamente.'
    const expected3 = error3.data.message

    return [
      { error: error1, expected: expected1 },
      { error: error2, expected: expected2 },
      { error: error3, expected: expected3 },
    ]
  }

  it('should parse the error message correctly', () => {
    buildParameters().map(({ error, expected }) =>
      expect(parseErrorMessage(error)).toBe(expected),
    )
  })
})
