import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

import { ServiceError } from '@models/service-error/service-error'
import { HTTP } from '@config/http'

const { API_URL } = HTTP

export const api = axios.create({
  baseURL: API_URL,
})

export const baseQuery = (token?: string) =>
  fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${token}`)
      return headers
    },
  }) as BaseQueryFn<unknown, unknown, ServiceError>
