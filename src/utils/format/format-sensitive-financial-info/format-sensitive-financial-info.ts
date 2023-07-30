const MASKED_CHAR = '*'

export const formatSensitiveFinancialInfo = (data: string) => {
  const length = data.length

  return data.substring(length - 4).padStart(length, MASKED_CHAR)
}
