import { rest } from 'msw'
import { STUDENTS } from './mock-data'
import generateYFF from './yff'

export const handlers = [
  rest.get('https://api.minelev.no/students/me', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(STUDENTS)
    )
  }),
  rest.get('https://api.minelev.no/yff/:student', (req, res, ctx) => {
    const { student } = req.params
    return res(
      ctx.status(200),
      ctx.json(generateYFF({ student, type: false, id: false }))
    )
  }),
  rest.get('https://api.minelev.no/yff/:student/:type', (req, res, ctx) => {
    const { student, type } = req.params
    return res(
      ctx.status(200),
      ctx.json(generateYFF({ student, type, id: false }))
    )
  }),
  rest.get('https://api.minelev.no/yff/:student/:type/:id', (req, res, ctx) => {
    const { student, type, id } = req.params
    return res(
      ctx.status(200),
      ctx.json(generateYFF({ student, type, id }))
    )
  })
]
