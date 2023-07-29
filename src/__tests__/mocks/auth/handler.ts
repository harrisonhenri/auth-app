import { rest } from 'msw'

const API_URL = import.meta.env.VITE_API_URL

export const handlers = [
  rest.post(`${API_URL}/auth/login`, async (_, res, ctx) => {
    return res(ctx.status(400), ctx.json({}), ctx.delay(150))
  }),
  rest.post(`${API_URL}/auth/login`, async (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: 'any token',
      }),
      ctx.delay(150),
    )
  }),
]
