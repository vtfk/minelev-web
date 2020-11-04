import { generateErrorObject, generateResponseObject } from './handlers'
import { CURRENT_USER, DOCUMENTS, STUDENTS, TEACHERS, getRandomObjectId } from './mock-data'

export const getAllDocuments = () => {
  return generateResponseObject(DOCUMENTS)
}

export const getDocuments = (studentId, type, documentId) => {
  const student = STUDENTS.find(student => (student.id === studentId || student.username === studentId))
  if (!student) {
    return generateErrorObject(403, 'You don\'t have access to this student!', { id: studentId })
  }

  // Get all student documents
  const documents = DOCUMENTS.filter(document => document.student.username === student.username)
  if (!documents || documents.length === 0) {
    return generateErrorObject(404, 'No documents was found for this student', { id: studentId })
  }

  // Return specific document (/documents/:student/:type/:id)
  if (documentId) {
    const document = documents.find(document => (document.id === documentId || document._id === documentId) && document.type === type)
    if (!document) {
      return generateErrorObject(404, 'No document was found with provided type and id for this student.', { studentId, type, documentId })
    }

    return generateResponseObject(document)
  }

  // Return all by type (/documents/:student/:type)
  if (type) {
    const documentsWithType = documents.filter(document => document.type === type)
    if (!documentsWithType || documentsWithType.length === 0) {
      return generateErrorObject(404, 'No documents was found with given type for this student.', { studentId, type })
    }

    return generateResponseObject(documentsWithType)
  }

  // Return all student documents (/documents/:student)
  return generateResponseObject(documents)
}

export const newDocument = (studentId, type, variant, content) => {
  if (!(studentId && type && variant && content)) {
    return generateErrorObject(400, 'Invalid input!', { studentId, type, variant, content })
  }

  if (!['varsel', 'samtale', 'yff', 'notat'].includes(type)) {
    return generateErrorObject(400, 'Invlid type', { type })
  }

  const student = STUDENTS.find(student => (student.id === studentId || student.username === studentId))
  if (!student) {
    return generateErrorObject(403, 'You don\'t have access to this student!', { id: studentId })
  }

  const teacher = TEACHERS.find(teacher => teacher.username === CURRENT_USER.onPremisesSamAccountName || teacher.mail === CURRENT_USER.userPrincipalName)
  const timestamp = new Date().getTime()

  return {
    _id: getRandomObjectId(),
    type,
    variant,
    created: {
      timestamp,
      username: teacher.username
    },
    student: {
      username: student.username,
      name: student.fullName
    },
    teacher: {
      username: teacher.username,
      name: teacher.fullName
    },
    school: {
      id: student.schoolId,
      name: student.schoolName
    },
    content,
    encrypted: false,
    isQueued: true,
    status: [
      {
        timestamp,
        status: 'I kø'
      }
    ]
  }
}
