export const getInputDataStatus = (
  touched?: boolean,
  errorMessage?: string,
) => {
  if (!touched) return 'untouched'

  if (errorMessage) return 'invalid'

  return null
}
