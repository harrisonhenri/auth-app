import { formHasErrors } from '@utils/form/form-has-errors/form-has-errors'
import { vitest } from 'vitest'

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

  beforeEach(async () => {
    vitest.useFakeTimers({
      now: new Date('2023-07-30T19:01:00.000Z'),
      shouldAdvanceTime: true,
      toFake: ['Date'],
    })
  })

  it('should check if the token is expired correctly', () => {
    buildParameters().map(({ errorsObject, expected }) =>
      expect(formHasErrors(errorsObject)).toBe(expected),
    )
  })
})
