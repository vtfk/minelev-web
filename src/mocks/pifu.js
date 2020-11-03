import { CLASSES, STUDENTS, TEACHERS } from './mock-data'

const generateResponseObject = (response) => {
  return {
    data: response,
    count: response.length || undefined
  }
}

const generateErrorObject = (statusCode, message, innerError) => {
  return {
    error: {
      statusCode: statusCode || 500,
      message: message || 'Unexpected error occured!',
      innerError
    }
  }
}

export function getStudents () {
  const students = STUDENTS.map(student => {
    delete student.groups
    return student
  })

  return generateResponseObject(students)
}

export function getStudent (id) {
  const student = STUDENTS.find(student => (student.id === id || student.username === id))
  if (!student) {
    return generateErrorObject(403, 'You don\'t have access to this student!', { id })
  }
  return generateResponseObject(student)
}

export function getStudentClasses (id) {
  const student = STUDENTS.find(student => (student.id === id || student.username === id))
  if (!student) {
    return generateErrorObject(403, 'You don\'t have access to this student!', { id })
  }
  return generateResponseObject(student.groups)
}

export function getStudentTeachers (id) {
  const student = STUDENTS.find(student => (student.id === id || student.username === id))
  if (!student) {
    return generateErrorObject(403, 'You don\'t have access to this student!', { id })
  }

  // Get teacher by students groupIds
  const groupIds = student.groups.map(group => group.id)
  const teachers = TEACHERS.filter(teacher => teacher.relatedGroupIds.some(id => groupIds.includes(id)))
  const repackedTeachers = teachers.map(teacher => {
    teacher.relatedGroupIds = teacher.relatedGroupIds.filter(id => groupIds.includes(id))
    return teacher
  })

  return generateResponseObject(repackedTeachers)
}

export function getClasses () {
  return generateResponseObject(CLASSES)
}

export function getClass (id) {
  const schoolClass = CLASSES.find(schoolClass => (schoolClass.id === id || schoolClass.groupId === id))
  if (!schoolClass) {
    return generateErrorObject(403, 'You don\'t have access to this class!', { id })
  }

  // Get student and teachers and remove utdprog from students
  const { data: students } = getClassStudents(id)
  const { data: teachers } = getClassTeachers(id)

  schoolClass.teachers = teachers
  schoolClass.students = students.map(student => {
    delete student.programomraade
    delete student.utdanningsprogram
    return student
  })

  return generateResponseObject(schoolClass)
}

export function getClassStudents (id) {
  const schoolClass = CLASSES.find(schoolClass => (schoolClass.id === id || schoolClass.groupId === id))
  if (!schoolClass) {
    return generateErrorObject(403, 'You don\'t have access to this class!', { id })
  }

  // Get student by groupId and remove groups
  const students = STUDENTS.filter(student => student.groups ? student.groups.some(group => group.id === schoolClass.id || group.groupId === id) : false)
  const repackedStudents = students.map(student => {
    delete student.groups
    return student
  })

  return generateResponseObject(repackedStudents)
}

export function getClassTeachers (id) {
  const schoolClass = CLASSES.find(schoolClass => (schoolClass.id === id || schoolClass.groupId === id))
  if (!schoolClass) {
    return generateErrorObject(403, 'You don\'t have access to this class!', { id })
  }

  // Get teacher by relatedGroupId and remove related groups
  const teachers = TEACHERS.filter(teacher => teacher.relatedGroupIds ? teacher.relatedGroupIds.includes(schoolClass.id) : false)
  const repackedTeachers = teachers.map(teacher => {
    delete teacher.relatedGroupIds
    return teacher
  })

  return generateResponseObject(repackedTeachers)
}
