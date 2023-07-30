import { rest } from 'msw'
import { userData } from '../data/user/user'

const API_URL = import.meta.env.VITE_API_URL

export const handlers = [
  rest.get(`${API_URL}/users/${userData.id}`, async (_, res, ctx) => {
    return res(ctx.status(400), ctx.json({}), ctx.delay(150))
  }),
  rest.get(`${API_URL}/users/${userData.id}`, async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(userData), ctx.delay(150))
  }),
]
