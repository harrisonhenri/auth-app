import { formatSensitiveFinancialInfo } from '@utils/format/format-sensitive-financial-info/format-sensitive-financial-info'

describe('format', () => {
  function buildParameters() {
    const data1 = '+86 886 889 0258'
    const data2 = 'GB94 MOIU 1274 8449 9733 05'
    const data3 = '5602214306858976'

    const expected1 = '************0258'
    const expected2 = '***********************3 05'
    const expected3 = '************8976'

    return [
      { data: data1, expected: expected1 },
      { data: data2, expected: expected2 },
      { data: data3, expected: expected3 },
    ]
  }

  it('should format sensitive data correctly', () => {
    buildParameters().map(({ data, expected }) =>
      expect(formatSensitiveFinancialInfo(data)).toBe(expected),
    )
  })
})
