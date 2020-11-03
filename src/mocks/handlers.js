import { rest } from 'msw'
import { getStudents, getStudent, getStudentClasses, getStudentTeachers, getClasses, getClass, getClassStudents, getClassTeachers } from './pifu'
import generateYFF from './yff'

export const handlers = [
  rest.get('https://api.minelev.no/students', (req, res, ctx) => {
    const students = getStudents()

    return res(
      ctx.status(200),
      ctx.json(students)
    )
  }),

  rest.get('https://api.minelev.no/students/:id', (req, res, ctx) => {
    const { id } = req.params
    const student = getStudent(id)

    return res(
      ctx.status(student.error ? student.error.statusCode : 200),
      ctx.json(student)
    )
  }),

  rest.get('https://api.minelev.no/students/:id/classes', (req, res, ctx) => {
    const { id } = req.params
    const classes = getStudentClasses(id)

    return res(
      ctx.status(classes.error ? classes.error.statusCode : 200),
      ctx.json(classes)
    )
  }),

  rest.get('https://api.minelev.no/students/:id/teachers', (req, res, ctx) => {
    const { id } = req.params
    const teachers = getStudentTeachers(id)

    return res(
      ctx.status(teachers.error ? teachers.error.statusCode : 200),
      ctx.json(teachers)
    )
  }),

  rest.get('https://api.minelev.no/classes', (req, res, ctx) => {
    const classes = getClasses()

    return res(
      ctx.status(200),
      ctx.json(classes)
    )
  }),

  rest.get('https://api.minelev.no/classes/:id', (req, res, ctx) => {
    const { id: rawId } = req.params
    const id = decodeURIComponent(rawId)
    const schoolClass = getClass(id)

    return res(
      ctx.status(schoolClass.error ? schoolClass.error.statusCode : 200),
      ctx.json(schoolClass)
    )
  }),

  rest.get('https://api.minelev.no/classes/:id/students', (req, res, ctx) => {
    const { id: rawId } = req.params
    const id = decodeURIComponent(rawId)
    const students = getClassStudents(id)

    return res(
      ctx.status(students.error ? students.error.statusCode : 200),
      ctx.json(students)
    )
  }),

  rest.get('https://api.minelev.no/classes/:id/teachers', (req, res, ctx) => {
    const { id: rawId } = req.params
    const id = decodeURIComponent(rawId)
    const teachers = getClassTeachers(id)

    return res(
      ctx.status(teachers.error ? teachers.error.statusCode : 200),
      ctx.json(teachers)
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
