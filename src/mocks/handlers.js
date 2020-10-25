import { rest } from 'msw'
import { STUDENTS } from './mock-data'

export const handlers = [
  rest.get('https://api.minelev.no/students/me', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(STUDENTS)
    )
  })
]
