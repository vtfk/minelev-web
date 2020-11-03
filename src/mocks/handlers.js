import { rest } from 'msw'
import { STUDENTS } from './mock-data'

export const handlers = [
  rest.get('https://api.minelev.no/students/me', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(STUDENTS)
    )
  }),
  rest.get('https://api.minelev.no/yff/:student/:type/:id', (req, res, ctx) => {
    const { student, type, id } = req.params
    console.log(student, type, id)
    return res(
      ctx.status(200),
      ctx.json(STUDENTS)
    )
  })
]
