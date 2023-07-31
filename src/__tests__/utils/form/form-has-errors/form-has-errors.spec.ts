import { formHasErrors } from '@utils/form/form-has-errors/form-has-errors'

describe('formHasErrors', () => {
  function buildParameters() {
    const errorsObject1 = undefined
    const errorsObject2 = {}
    const errorsObject3 = { a: undefined }
    const errorsObject4 = { a: 1 }
    const expected1 = false
    const expected2 = false
    const expected3 = false
    const expected4 = true

    return [
      { errorsObject: errorsObject1, expected: expected1 },
      { errorsObject: errorsObject2, expected: expected2 },
      { errorsObject: errorsObject3, expected: expected3 },
      { errorsObject: errorsObject4, expected: expected4 },
    ]
  }

  it('should check if there is any error in the errors object', () => {
    buildParameters().map(({ errorsObject, expected }) =>
      expect(formHasErrors(errorsObject)).toBe(expected),
    )
  })
})
