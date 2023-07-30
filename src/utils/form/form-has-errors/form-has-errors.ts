export const formHasErrors = <T extends object>(errorsObject?: T) => {
  if (!errorsObject || Object.keys(errorsObject).length === 0) return false

  return Object.entries(errorsObject).some(([k, v]) => Boolean(k) && Boolean(v))
}
