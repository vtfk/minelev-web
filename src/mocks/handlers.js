import { rest } from 'msw'
import { API } from '../config/app'
import { getAllDocuments, getDocumentPreview, getDocuments, newDocument } from './documents'

import { getStudents, getStudent, getStudentClasses, getStudentTeachers, getClasses, getClass, getClassStudents, getClassTeachers } from './pifu'
import generateYFF from './yff'
import getBrregData from './brreg'

export const generateResponseObject = (response) => {
  return {
    data: response,
    count: response.length || undefined
  }
}

export const generateErrorObject = (statusCode, message, innerError) => {
  return {
    error: {
      statusCode: statusCode || 500,
      message: message || 'Unexpected error occured!',
      innerError
    }
  }
}

export const handlers = [
  rest.get(`${API.URL}/brreg/`, (req, res, ctx) => {
    const data = getBrregData()
    console.log(data)
    return res(
      ctx.status(200),
      ctx.json(data)
    )
  }),

  rest.get(`${API.URL}/brreg/:query`, (req, res, ctx) => {
    const { query } = req.params
    const data = getBrregData(query)
    return res(
      ctx.status(200),
      ctx.json(data)
    )
  }),

  rest.get(`${API.URL}/students`, (req, res, ctx) => {
    const students = getStudents()

    return res(
      ctx.status(200),
      ctx.json(students)
    )
  }),

  rest.get(`${API.URL}/students/:id`, (req, res, ctx) => {
    const { id } = req.params
    const student = getStudent(id)

    return res(
      ctx.status(student.error ? student.error.statusCode : 200),
      ctx.json(student)
    )
  }),

  rest.get(`${API.URL}/students/:id/classes`, (req, res, ctx) => {
    const { id } = req.params
    const classes = getStudentClasses(id)

    return res(
      ctx.status(classes.error ? classes.error.statusCode : 200),
      ctx.json(classes)
    )
  }),

  rest.get(`${API.URL}/students/:id/teachers`, (req, res, ctx) => {
    const { id } = req.params
    const teachers = getStudentTeachers(id)

    return res(
      ctx.status(teachers.error ? teachers.error.statusCode : 200),
      ctx.json(teachers)
    )
  }),

  rest.get(`${API.URL}/classes`, (req, res, ctx) => {
    const classes = getClasses()

    return res(
      ctx.status(200),
      ctx.json(classes)
    )
  }),

  rest.get(`${API.URL}/classes/:id`, (req, res, ctx) => {
    const { id: rawId } = req.params
    const id = decodeURIComponent(rawId)
    const schoolClass = getClass(id)

    return res(
      ctx.status(schoolClass.error ? schoolClass.error.statusCode : 200),
      ctx.json(schoolClass)
    )
  }),

  rest.get(`${API.URL}/classes/:id/students`, (req, res, ctx) => {
    const { id: rawId } = req.params
    const id = decodeURIComponent(rawId)
    const students = getClassStudents(id)

    return res(
      ctx.status(students.error ? students.error.statusCode : 200),
      ctx.json(students)
    )
  }),

  rest.get(`${API.URL}/classes/:id/teachers`, (req, res, ctx) => {
    const { id: rawId } = req.params
    const id = decodeURIComponent(rawId)
    const teachers = getClassTeachers(id)

    return res(
      ctx.status(teachers.error ? teachers.error.statusCode : 200),
      ctx.json(teachers)
    )
  }),

  rest.get(`${API.URL}/documents`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(getAllDocuments())
    )
  }),

  rest.get(`${API.URL}/documents/:id`, (req, res, ctx) => {
    const { id } = req.params
    return res(
      ctx.status(200),
      ctx.json(getAllDocuments().filter(doc => doc._id === id))
    )
  }),

  /*
    {
      type: 'varsel',
      variant: 'fag',
      student: {
        username: 'abc123'
      }
      content: {}
    }
  */
  rest.post(`${API.URL}/documents`, (req, res, ctx) => {
    // @ts-ignore
    const { type, student, variant, content } = req.body
    const documents = newDocument(student.username, type, variant, content)
    return res(
      ctx.status(documents.error ? documents.error.statusCode : 200),
      ctx.json(documents)
    )
  }),

  /*
    {
      type: 'varsel',
      variant: 'fag',
      content: {}
    }
  */
  rest.post(`${API.URL}/students/:student/documents`, (req, res, ctx) => {
    // @ts-ignore
    const { type, variant, content } = req.body
    const { student } = req.params
    const documents = newDocument(student, type, variant, content)
    return res(
      ctx.status(documents.error ? documents.error.statusCode : 200),
      ctx.json(documents)
    )
  }),

  rest.get(`${API.URL}/students/:student/documents`, (req, res, ctx) => {
    const { student } = req.params
    const type = req.url.searchParams.get('type')

    const documents = getDocuments(student, type)
    return res(
      ctx.status(documents.error ? documents.error.statusCode : 200),
      ctx.json(documents)
    )
  }),

  rest.get(`${API.URL}/classes/:id/documents`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(getAllDocuments())
    )
  }),

  rest.post(`${API.URL}/preview/:lang`, (req, res, ctx) => {
    // @ts-ignore
    const { lang } = req.params
    const preview = getDocumentPreview(req.body, lang)
    return res(
      ctx.status(200),
      ctx.json(preview)
    )
  }),

  rest.get(`${API.URL}/yff/:student`, (req, res, ctx) => {
    const { student } = req.params
    return res(
      ctx.status(200),
      ctx.json(generateYFF({ student, type: false, id: false }))
    )
  }),

  rest.get(`${API.URL}/yff/:student/:type`, (req, res, ctx) => {
    const { student, type } = req.params
    return res(
      ctx.status(200),
      ctx.json(generateYFF({ student, type, id: false }))
    )
  }),

  rest.get(`${API.URL}/yff/:student/:type/:id`, (req, res, ctx) => {
    const { student, type, id } = req.params
    return res(
      ctx.status(200),
      ctx.json(generateYFF({ student, type, id }))
    )
  })
]
