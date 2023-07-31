import { ServiceError } from '@models/core/service-error/service-error'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

const STANDARD_MESSAGE =
  'Estamos tendo problemas em fazer isso. Verifique sua conexão com a internet e tente novamente.'

export const parseErrorMessage = (
  error: ServiceError | SerializedError | FetchBaseQueryError,
) => {
  if (isServiceError(error))
    return error.data.message === 'Network Error'
      ? STANDARD_MESSAGE
      : error.data.message

  return STANDARD_MESSAGE
}

const isServiceError = (
  error: ServiceError | SerializedError | FetchBaseQueryError,
): error is ServiceError => {
  return 'data' in error && 'message' in (error.data as ServiceError['data'])
}
