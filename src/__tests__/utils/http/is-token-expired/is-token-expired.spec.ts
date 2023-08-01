import { isTokenExpired } from '@utils/http/is-token-expired/is-token-expired'
import { vitest } from 'vitest'

describe('isTokenExpired', () => {
  function buildParameters() {
    const token1 =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY5MDc0MDAxMCwiZXhwIjoxNjkwNzQzNjEwfQ._kc2G7LBC4c2Tz3UZRCv73tKeD-KtUmf0-hjTFNwo10'
    const token2 =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY5MDc0MDM0NywiZXhwIjoxNjkwNzQzOTQ3fQ.Z8AuuDOMK9BOq8dYp0S6L2UMUikIGnexUOyqxjKyYHE'
    const token3 = null
    const expected1 = true
    const expected2 = false
    const expected3 = false

    return [
      { token: token1, expected: expected1 },
      { token: token2, expected: expected2 },
      { token: token3, expected: expected3 },
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
    buildParameters().map(({ token, expected }) =>
      expect(isTokenExpired(token)).toBe(expected),
    )
  })
})
